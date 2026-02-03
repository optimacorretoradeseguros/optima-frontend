import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Óptima Corretora de Seguros",
  description: "A melhor proteção começa com a escolha certa. A Óptima media a relação entre clientes e seguradoras.",
  generator: "v0.app",
  icons: {
    icon: "/optima-icon.png",
    apple: "/optima-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
