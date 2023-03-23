import { useUserAuth } from "@/hooks/useUserAuth"

export default function Home() {
  const props = useUserAuth()

  const user = props?.getUser()
  console.log("dados do usuario", user)

  return (
    <main className="h-full">
      <div className="w-full h-[500px] flex flex-col justify-center  text-center">
        <h1 className=" text-slate-400 text-3xl font-bold ">
          Here will be the content of the app
        </h1>
      </div>
    </main>
  )
}
