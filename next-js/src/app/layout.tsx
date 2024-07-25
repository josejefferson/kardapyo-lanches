import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from 'next'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Kardapyo Lanches | Cardápio Digital Online'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
