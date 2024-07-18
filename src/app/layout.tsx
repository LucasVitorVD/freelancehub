import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "FreelanceHub",
  description: "Plataforma onde transformamos ideias em realidade.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${poppins.className} text-pretty antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}