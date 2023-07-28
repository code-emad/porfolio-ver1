import LayoutWithclient from "./layoutwithclient"

export const metadata = {
  title: 'Emad Islam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutWithclient>{children}</LayoutWithclient>
  )
}
