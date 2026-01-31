// app/layout.tsx
import "./globals.css"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export const metadata = {
  title: "Mehwash | Frontend Engineer",
  description: "Portfolio showcasing frontend systems, UI architecture, and case studies."
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
