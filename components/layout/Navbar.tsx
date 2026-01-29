// components/layout/Navbar.tsx
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="px-6 py-4 border-b border-neutral-800">
      <div className="max-w-5xl mx-auto flex justify-between">
        <Link href="/" className="font-medium text-white">
          Mehwash
        </Link>

        <Link
          href="/projects"
          className="text-neutral-400 hover:text-white transition"
        >
          Projects
        </Link>
      </div>
    </nav>
  )
}
