import LayoutWithclient from "./layoutwithclient"
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Emad Islam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutWithclient>
      {children}
      
    </LayoutWithclient>
  )
}
