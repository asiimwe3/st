import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PHONE        = "256782460683"
const PHONE_DISPLAY = "+256 782 460 683"

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href) => router.pathname === href

  const links = [
    { href: '/',            label: 'Home'        },
    { href: '/about',       label: 'About'       },
    { href: '/services',    label: 'Services'    },
    { href: '/doctors',     label: 'Our Doctors' },
    { href: '/appointment', label: 'Book Appointment' },
    { href: '/contact',     label: 'Contact'     },
  ]

  return (
    <>
      {/* 🚨 Emergency sticky banner */}
      <div className="bg-red-600 text-white text-xs py-1.5 px-4 text-center font-semibold z-50 pulse-red">
        🚨 24/7 Emergency Line:&nbsp;
        <a href={`tel:+${PHONE}`} className="underline hover:text-red-100 font-bold">{PHONE_DISPLAY}</a>
        &nbsp;|&nbsp;
        <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent("EMERGENCY — I need help at St. Peters Medical Center")}`}
           target="_blank" rel="noreferrer" className="underline hover:text-red-100">
          WhatsApp Emergency →
        </a>
      </div>

      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-card-lg' : 'bg-white shadow-md'}`}>
        {/* Top info bar */}
        <div className="bg-primary text-white text-sm py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center gap-4 text-xs">
              <span>📍 Kyenjojo Town, Kagadi Road</span>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:inline">🕐 Mon–Sat: 8AM–6PM &nbsp;|&nbsp; Emergency: 24/7</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <a href={`tel:+${PHONE}`} className="font-semibold hover:text-green-200 transition flex items-center gap-1">
                📞 {PHONE_DISPLAY}
              </a>
              <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"
                 className="bg-green-500 hover:bg-green-400 transition px-3 py-1 rounded-full font-semibold text-xs">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center shadow-glow-blue">
              <span className="text-white font-black text-base">SP</span>
            </div>
            <div>
              <p className="font-black text-primary text-base leading-tight">St. Peters</p>
              <p className="text-secondary text-xs font-semibold leading-tight">Medical Center</p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.slice(0,5).map(l => (
              <Link key={l.href} href={l.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                  ${isActive(l.href)
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 hover:bg-light hover:text-primary'}`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link href="/appointment"
              className="hidden md:inline-flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-glow-green hover:bg-emerald-700 transition-all duration-200">
              📅 Book Now
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-700 my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition
                  ${isActive(l.href) ? 'bg-primary text-white' : 'text-gray-700 hover:bg-light'}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/appointment" onClick={() => setMenuOpen(false)}
              className="block text-center bg-secondary text-white px-4 py-3 rounded-xl text-sm font-bold mt-2">
              📅 Book Appointment
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
