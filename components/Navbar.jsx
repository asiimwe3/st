import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PHONE = "256700000000"  // UPDATE: replace with real number
const PHONE_DISPLAY = "+256 700 000 000"  // UPDATE: replace with real number

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const isActive = (href) => router.pathname === href

  return (
    <>
      {/* Emergency sticky banner */}
      <div className="bg-red-600 text-white text-xs py-1.5 px-4 text-center font-semibold z-50">
        🚨 24/7 Emergency Line: <a href={`tel:${PHONE}`} className="underline hover:text-red-100">{PHONE_DISPLAY}</a>
        &nbsp;|&nbsp;
        <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent("EMERGENCY — I need help at St. Peters Medical Center")}`}
          target="_blank" rel="noreferrer" className="underline hover:text-red-100">
          WhatsApp Emergency
        </a>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-40">
        {/* Top info bar */}
        <div className="bg-primary text-white text-sm py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
            <span>📍 Kyenjojo Town, Kagadi Road</span>
            <div className="flex items-center gap-4 text-xs">
              <span>🕐 Mon–Sat: 8AM–6PM</span>
              <a href={`tel:${PHONE}`} className="font-semibold hover:text-green-200 transition">
                📞 {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white font-bold text-base shadow-sm">
              SP
            </div>
            <div>
              <p className="font-bold text-primary text-base leading-tight">St. Peters</p>
              <p className="text-secondary text-xs font-semibold leading-tight">Medical Center</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7 text-gray-700 font-medium text-sm">
            {[
              { href: '/',           label: 'Home' },
              { href: '/about',      label: 'About' },
              { href: '/services',   label: 'Services' },
              { href: '/doctors',    label: 'Doctors' },
              { href: '/contact',    label: 'Contact' },
            ].map(({ href, label }) => (
              <Link key={href} href={href}
                className={`hover:text-primary transition pb-0.5 ${isActive(href) ? 'text-primary border-b-2 border-primary font-semibold' : ''}`}>
                {label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello, I'd like to book an appointment at St. Peters Medical Center.")}`}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 border border-green-500 text-green-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-50 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.853L0 24l6.313-1.496A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.5-5.19-1.374l-.373-.22-3.747.888.937-3.638-.243-.386A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
            <Link href="/appointment"
              className="bg-secondary text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition text-sm">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-primary text-2xl font-bold p-1">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 pb-5 flex flex-col gap-1 text-gray-700 font-medium shadow-lg">
            {[
              { href: '/',           label: 'Home' },
              { href: '/about',      label: 'About' },
              { href: '/services',   label: 'Services' },
              { href: '/doctors',    label: 'Doctors' },
              { href: '/contact',    label: 'Contact' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className={`py-3 border-b border-gray-100 ${isActive(href) ? 'text-primary font-semibold' : ''}`}>
                {label}
              </Link>
            ))}
            <div className="flex gap-3 mt-3">
              <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"
                className="flex-1 border border-green-500 text-green-600 text-center py-2.5 rounded-full text-sm font-semibold">
                WhatsApp
              </a>
              <Link href="/appointment" onClick={() => setMenuOpen(false)}
                className="flex-1 bg-secondary text-white text-center py-2.5 rounded-full text-sm font-semibold">
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
