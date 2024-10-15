import type { Metadata } from 'next'
import './globalStyles/globals.css'

export const metadata: Metadata = {
  title: 'Стройматериалы',
  description:
    'Проект представляет собой интернет-магазин строительных материалов.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
