import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

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
          <header></header>
          <main>
            {children}
          </main>
          <footer></footer>
        </div>
      </body>
    </html>
  )
}