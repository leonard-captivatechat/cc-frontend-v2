export default function AccountAuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section
      id="account-layout"
      className="h-screen bg-[url('/bg-account.png')] bg-contain bg-no-repeat"
    >
      <div className="flex h-full justify-end">
        <div className="mr-28 flex w-[460px] items-center">{children}</div>
      </div>
    </section>
  )
}
