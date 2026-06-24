import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PHONE = "256782460683"

const services = [
  { icon: '🩺', title: 'General Medicine',    desc: 'Comprehensive diagnosis and treatment for adults and children by experienced physicians.',      color: 'bg-blue-50 border-blue-200'   },
  { icon: '🤱', title: 'Maternity Care',       desc: 'Safe, professional care for mothers and newborns through every stage of pregnancy.',             color: 'bg-pink-50 border-pink-200'   },
  { icon: '🧪', title: 'Laboratory',           desc: 'Accurate and fast diagnostic lab tests — malaria, HIV, blood panels and more.',                  color: 'bg-yellow-50 border-yellow-200' },
  { icon: '💊', title: 'Pharmacy',             desc: 'Well-stocked on-site pharmacy with quality medicines at affordable prices.',                     color: 'bg-green-50 border-green-200' },
  { icon: '🚨', title: 'Emergency Care',       desc: '24/7 emergency services ready to handle critical conditions. We never close.',                   color: 'bg-red-50 border-red-200'     },
  { icon: '👶', title: 'Pediatrics',           desc: 'Specialized care for infants, toddlers, and children — check-ups, immunizations, treatment.',    color: 'bg-purple-50 border-purple-200'},
  { icon: '💉', title: 'Immunization',         desc: 'Vaccination services for children and adults following Uganda\'s national schedule.',            color: 'bg-indigo-50 border-indigo-200'},
  { icon: '🩻', title: 'Outpatient Clinic',    desc: 'Daily consultations for non-emergency conditions. Fast, quality care without admission.',        color: 'bg-teal-50 border-teal-200'   },
  { icon: '🛏️', title: 'Inpatient Admission', desc: 'Clean, comfortable wards for patients requiring extended medical care and monitoring.',          color: 'bg-orange-50 border-orange-200'},
]

const stats = [
  { number: 10,    suffix: '+',  label: 'Years of Service',  icon: '🏥' },
  { number: 5000,  suffix: '+',  label: 'Patients Served',   icon: '👥' },
  { number: 20,    suffix: '+',  label: 'Medical Staff',     icon: '👨‍⚕️' },
  { number: 24,    suffix: '/7', label: 'Emergency Care',    icon: '🚨' },
]

const testimonials = [
  { name: 'Sarah K.',  loc: 'Kyenjojo', rating: 5, text: 'The doctors and nurses at St. Peters are amazing. Very professional and caring. I felt completely safe throughout my delivery.' },
  { name: 'James M.',  loc: 'Kagadi',   rating: 5, text: 'Quick service and accurate diagnosis. Lab results were ready in no time. Best medical facility in the region — highly recommended.' },
  { name: 'Grace N.',  loc: 'Kyenjojo', rating: 5, text: 'St. Peters Medical Center has the best maternity care around. Warm, professional, and affordable. My whole family trusts them.' },
]

const doctors = [
  { initials: 'EM', name: 'Dr. Emmanuel Mugisha',  specialty: 'General Medicine',   color: 'bg-primary'   },
  { initials: 'GN', name: 'Dr. Grace Naturinda',   specialty: 'Maternity & OB/GYN', color: 'bg-secondary' },
  { initials: 'RB', name: 'Dr. Robert Bwambale',   specialty: 'Pediatrics',         color: 'bg-blue-600'  },
]

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps    = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(current))
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [searchQuery, setSearchQuery]             = useState('')

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [])

  const filteredServices = services.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>St. Peters Medical Center | Quality Healthcare in Kyenjojo</title>
        <meta name="description" content="St. Peters Medical Center — trusted, compassionate healthcare in Kyenjojo Town, Kagadi Road. Book appointments, emergency care, maternity, lab and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="St. Peters Medical Center" />
        <meta property="og:description" content="Quality Healthcare in Kyenjojo, Uganda" />
      </Head>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative hero-gradient-dark text-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-400 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping-slow inline-block" />
              Now Open &nbsp;·&nbsp; Emergency 24/7
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              Your Health,<br />
              <span className="text-green-400">Our Priority</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
              St. Peters Medical Center — trusted, compassionate healthcare serving Kyenjojo and beyond. 
              Modern facilities, experienced doctors, affordable care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full shadow-glow-green transition-all duration-200 text-lg">
                📅 Book Appointment
              </Link>
              <a href={`tel:+${PHONE}`}
                className="inline-flex items-center gap-2 glass text-white font-semibold px-7 py-4 rounded-full hover:bg-white/20 transition-all duration-200 text-lg">
                📞 Call Us Now
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-blue-200">
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Free Initial Consultation</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Affordable Rates</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Certified Doctors</span>
            </div>
          </div>

          {/* Right — quick actions card */}
          <div className="glass rounded-3xl p-8 space-y-4">
            <h3 className="font-bold text-xl mb-2">Quick Actions</h3>
            {[
              { icon: '📅', label: 'Book an Appointment',   href: '/appointment',  bg: 'bg-secondary hover:bg-emerald-600' },
              { icon: '🩺', label: 'Find a Doctor',          href: '/doctors',      bg: 'bg-primary hover:bg-blue-700'     },
              { icon: '🧪', label: 'Lab Test Information',   href: '/services',     bg: 'bg-indigo-600 hover:bg-indigo-700'},
              { icon: '🚨', label: 'Emergency — Call Now',   href: `tel:+${PHONE}`, bg: 'bg-red-600 hover:bg-red-700'      },
            ].map(item => (
              <Link key={item.label} href={item.href}
                className={`flex items-center gap-4 ${item.bg} text-white rounded-2xl px-5 py-4 font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5`}>
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
                <span className="ml-auto text-white/60">→</span>
              </Link>
            ))}
            <p className="text-center text-blue-200 text-xs pt-2">📍 Kyenjojo Town, Kagadi Road</p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center card-hover bg-light rounded-2xl p-6 border border-blue-100">
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">
                <Counter target={s.number} suffix={s.suffix} />
              </div>
              <div className="text-gray-600 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="py-20 section-gradient" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-3">
              Our <span className="gradient-text">Medical Services</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everything you need for complete family healthcare — all under one roof in Kyenjojo.</p>

            {/* Search bar */}
            <div className="relative max-w-md mx-auto mt-6">
              <input
                type="text"
                placeholder="Search a service e.g. Maternity, Lab..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full border-2 border-blue-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary transition pr-10"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredServices.map((s, i) => (
              <div key={i} className={`card-hover border-2 ${s.color} rounded-2xl p-6 bg-white cursor-pointer`}>
                <div className="icon-ring mb-4">{s.icon}</div>
                <h3 className="font-bold text-dark text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <Link href="/appointment" className="inline-block mt-4 text-primary text-sm font-semibold hover:underline">
                  Book now →
                </Link>
              </div>
            ))}
            {filteredServices.length === 0 && (
              <div className="col-span-3 text-center py-12 text-gray-400">
                No services found for &ldquo;{searchQuery}&rdquo;
              </div>
            )}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-green-100 text-secondary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
              Why St. Peters?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-6">
              Healthcare You Can <span className="gradient-text">Trust</span>
            </h2>
            <div className="space-y-5">
              {[
                { icon: '🏥', title: 'Modern Facilities',      desc: 'Equipped with up-to-date medical equipment and clean, comfortable wards.' },
                { icon: '👨‍⚕️', title: 'Certified Doctors',    desc: 'All our doctors are qualified, registered, and continuously trained.' },
                { icon: '💰', title: 'Affordable Care',        desc: 'We believe quality healthcare should be accessible to every family.' },
                { icon: '📍', title: 'Conveniently Located',   desc: 'Right in Kyenjojo Town on Kagadi Road — easy to reach from anywhere.' },
                { icon: '❤️', title: 'Patient-Centred Care',   desc: 'We treat every patient with dignity, empathy, and genuine concern.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-light transition-all duration-200 cursor-default">
                  <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-dark">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — opening hours + emergency card */}
          <div className="space-y-6">
            <div className="bg-light border border-blue-100 rounded-3xl p-8">
              <h3 className="font-black text-dark text-xl mb-5 flex items-center gap-2">🕐 Opening Hours</h3>
              <div className="space-y-3">
                {[
                  ['Monday – Friday',  '8:00 AM – 6:00 PM', true ],
                  ['Saturday',         '8:00 AM – 4:00 PM', true ],
                  ['Sunday',           '10:00 AM – 2:00 PM', true],
                  ['Public Holidays',  'Emergency Only',     false],
                ].map(([day, hours, open]) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-blue-100 last:border-0">
                    <span className="text-gray-600 text-sm font-medium">{day}</span>
                    <span className={`text-sm font-bold ${open ? 'text-secondary' : 'text-red-500'}`}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-3xl p-8 text-center">
              <div className="text-5xl mb-3">🚨</div>
              <h3 className="font-black text-2xl mb-2">Emergency?</h3>
              <p className="text-red-100 mb-5 text-sm">Our emergency team is available 24 hours a day, 7 days a week.</p>
              <a href={`tel:+${PHONE}`}
                className="inline-block bg-white text-red-600 font-black px-8 py-3 rounded-full text-lg hover:bg-red-50 transition shadow-lg">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCTORS PREVIEW ──────────────────────────────────────────────────── */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-3">
              Our <span className="gradient-text">Specialist Doctors</span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">Experienced, caring professionals dedicated to your wellbeing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {doctors.map((d, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl p-8 text-center shadow-card border border-gray-100">
                <div className={`w-20 h-20 ${d.color} rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-lg`}>
                  {d.initials}
                </div>
                <h3 className="font-bold text-dark text-lg">{d.name}</h3>
                <p className="text-secondary text-sm font-semibold mt-1 mb-4">{d.specialty}</p>
                <Link href="/appointment"
                  className="inline-block bg-light text-primary text-sm font-bold px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200">
                  Book Consultation
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/doctors" className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200">
              View Full Medical Team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">❝</div>
          <div className="absolute bottom-10 right-10 text-9xl">❞</div>
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-12">What Patients Say About Us</h2>

          <div className="glass rounded-3xl p-10 min-h-[220px] flex flex-col justify-center transition-all duration-500">
            <div className="flex justify-center mb-4">
              {'⭐'.repeat(testimonials[activeTestimonial].rating).split('').map((s,i) => (
                <span key={i} className="text-yellow-400 text-xl">{s}</span>
              ))}
            </div>
            <p className="text-lg md:text-xl italic text-blue-50 leading-relaxed mb-6">
              &ldquo;{testimonials[activeTestimonial].text}&rdquo;
            </p>
            <div>
              <p className="font-bold text-white">{testimonials[activeTestimonial].name}</p>
              <p className="text-blue-300 text-sm">{testimonials[activeTestimonial].loc}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all duration-300 ${i === activeTestimonial ? 'bg-white w-8 h-3' : 'bg-white/30 w-3 h-3'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">
            Ready to Take Care of <span className="gradient-text">Your Health?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8">Book an appointment today or walk in during our opening hours. We are here for you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/appointment"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full shadow-glow-blue hover:bg-blue-700 transition-all duration-200 text-lg">
              📅 Book Appointment
            </Link>
            <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello, I'd like to enquire about your services at St. Peters Medical Center.")}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-200 text-lg">
              💬 WhatsApp Us
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-200 text-lg">
              📍 Get Directions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
