import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const neueHaasDisplayMedium = localFont({
  src: './fonts/NeueHaasDisplayRoman.ttf',
  variable: '--font-neue-haas-display-medium',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${neueHaasDisplayMedium.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
