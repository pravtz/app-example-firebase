'use client'
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from 'next/navigation';

type LoginType = { forgot: (email: string) => {} }

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
    email: yup.string().email('é necessário um email valido!').required('o email é obrigatório!'),
}).required();


export const Forgot = ({ forgot }: LoginType) => {
    const [isRequestsent, setIsRequestSent] = useState<Boolean>(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: yupResolver(schema) });
    const router = useRouter()

    const onSubmit = async (data: FormData) => {
        await forgot(data.email);
        reset();
        setIsRequestSent(true)
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="my-7">
                <h1 className="text-3xl text-slate-700">Forgot App</h1>
                <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut sit amet consectetur minima.</p>
            </div>

            {isRequestsent
                ? <>
                    <div>
                        <p className="text-slate-700 mb-8">
                            Caso seus email digitado esteja correto em nossos sistemas enviaremos o passo a passo para recadastrar uma nova senha!
                        </p>
                        <button className="w-full  py-2 border" type="button" onClick={() => router.back()}> Ok </button>


                    </div>
                </>
                : <>
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


                        <button type="submit" className="w-full  py-2 border">Log In</button>
                    </form>
                </>

            }

        </div>
    )
}