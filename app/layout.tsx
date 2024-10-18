import type { Metadata } from 'next'

import './globalStyles/globals.css'
import './globalStyles/header.css'

import Layout from '@/components/layouts/Layout'

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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
