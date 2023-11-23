export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-screen bg-[url('/bg-account.png')] bg-contain bg-no-repeat">
      <div className="flex h-full justify-end">
        <div className="mr-28 flex w-[460px] items-center">{children}</div>
      </div>
    </section>
  )
}
