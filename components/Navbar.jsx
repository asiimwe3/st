import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>📍 Kyenjojo Town, Kagadi Road</span>
          <span className="font-semibold">🚨 Emergency: Coming Soon</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
            SP
          </div>
          <div>
            <p className="font-bold text-primary text-lg leading-tight">St. Peters</p>
            <p className="text-secondary text-sm font-medium leading-tight">Medical Center</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <Link href="/doctors" className="hover:text-primary transition">Doctors</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link href="/appointment" className="hidden md:inline-block bg-secondary text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition">
          Book Appointment
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-primary text-2xl">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3 text-gray-700 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 border-b">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2 border-b">About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="py-2 border-b">Services</Link>
          <Link href="/doctors" onClick={() => setMenuOpen(false)} className="py-2 border-b">Doctors</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2 border-b">Contact</Link>
          <Link href="/appointment" onClick={() => setMenuOpen(false)} className="bg-secondary text-white text-center py-2 rounded-full">Book Appointment</Link>
        </div>
      )}
    </nav>
  )
}
