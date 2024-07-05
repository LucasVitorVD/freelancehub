import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

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
    <html lang="pt-br">
      <body className={poppins.className}>
        <div>
          <Header />
          <main>
            {children}
          </main>
          <footer></footer>
        </div>
      </body>
    </html>
  )
}