export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-screen h-[calc(100vh_-_80px)] flex flex-col justify-center">

            <div className=" m-auto w-[300px] md:w-[380px] p-3 border">{children}</div>
        </div>
    )
}