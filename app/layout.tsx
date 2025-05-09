import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nitinify',
  description: 'Created with love by Nitin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
