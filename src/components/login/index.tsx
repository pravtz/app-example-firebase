'use client'
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type LoginType = { login: (email: string, pass: string) => {} }

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
    email: yup.string().email('é necessário um email valido!').required('o email é obrigatório!'),
    pass: yup.string().min(5, "a senha não é valida").required('a senha é obrigatória!'),
}).required();


export const Login = ({ login }: LoginType) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: yupResolver(schema) });

    const onSubmit = async (data: FormData) => {
        await login(data.email, data.pass);
        reset();
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="my-7">
                <h1 className="text-3xl text-slate-700">Sing In to App</h1>
                <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut sit amet consectetur minima.</p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col ">
                    <label htmlFor="email" className="text-slate-500 text-[0.75em] tracking-widest">Email</label>
                    <input
                        type='email'
                        {...register('email')}
                        id="email"
                        className=" border-b-2 h-9 focus:outline-none focus:ringfocus:border-b-[1px] focus:border-blue-400 text-slate-700"
                    />
                    {errors.email && <span role="alert" className="text-right text-red-500 text-sm">{errors.email?.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="pass"
                        className="text-slate-500 text-[0.75em] tracking-widest "
                    >Password</label>
                    <input
                        id="pass"
                        type='password'
                        {...register('pass')}
                        className=" border-b-2 h-9 focus:outline-none focus:ringfocus:border-b-[1px] focus:border-blue-400 text-slate-700"
                    />
                    {errors.pass && <span role="alert" className="text-right text-red-500 text-sm">{errors.pass?.message}</span>}

                </div>
                <div className="flex justify-between ">
                    <div className="flex items-center gap-1">
                        <input type='checkbox' />
                        <label htmlFor="remember" className="text-slate-600 text-[.9em]  ">Remember me</label>

                    </div>
                    <Link href='/auth/forgot' className="text-slate-600 text-[0.85em] underline">Forgot Password</Link>
                </div>
                <button type="submit" className="w-full  py-2 border">Log In</button>
            </form>
        </div>
    )
}