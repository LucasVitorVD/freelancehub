import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}