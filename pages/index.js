import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
  { icon: '💉', title: 'Immunization',         desc: "Vaccination services for children and adults following Uganda's national schedule.",             color: 'bg-indigo-50 border-indigo-200'},
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
  {
    initials: 'EM', name: 'Dr. Emmanuel Mugisha',  specialty: 'General Medicine',   color: 'bg-primary',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
  },
  {
    initials: 'GN', name: 'Dr. Grace Naturinda',   specialty: 'Maternity & OB/GYN', color: 'bg-secondary',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
  },
  {
    initials: 'RB', name: 'Dr. Robert Bwambale',   specialty: 'Pediatrics',         color: 'bg-blue-600',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
  },
]

// Hero background images (rotating)
const heroImages = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop&auto=format&q=75',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=800&fit=crop&auto=format&q=75',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&h=800&fit=crop&auto=format&q=75',
]

// Animated counter
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800, steps = 60
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
  const [heroIdx, setHeroIdx]                     = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(p => (p + 1) % heroImages.length), 5000)
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
        <link rel="preload" as="image" href={heroImages[0]} />
      </Head>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative text-white overflow-hidden" style={{minHeight:'90vh'}}>
        {/* Background image slider */}
        {heroImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === heroIdx ? 1 : 0 }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/70 to-blue-900/60" />

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

        {/* Slide dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setHeroIdx(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === heroIdx ? 'bg-white w-6' : 'bg-white/40'}`} />
          ))}
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
              <div className="text-3xl md:text-4xl font-black text-primary">
                <Counter target={s.number} suffix={s.suffix} />
              </div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FACILITY PHOTO STRIP ─────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Our Facility</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">Modern Equipment. Caring Environment.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop&auto=format&q=75', alt: 'Medical ward' },
              { src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop&auto=format&q=75', alt: 'Laboratory' },
              { src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&auto=format&q=75', alt: 'Patient care' },
              { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format&q=75', alt: 'Reception' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-video group">
                <img src={img.src} alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-2">Our Medical Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Quality, affordable healthcare across a full range of specialties.</p>
          </div>
          {/* Search */}
          <div className="max-w-md mx-auto mb-10">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search a service e.g. Maternity, Lab..."
              className="w-full border border-blue-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredServices.map((s, i) => (
              <div key={i} className={`card-hover rounded-2xl border p-6 ${s.color}`}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
            {filteredServices.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-400">
                No services match &ldquo;{searchQuery}&rdquo;
              </div>
            )}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOCTORS PREVIEW ──────────────────────────────────────────────────── */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Medical Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Meet Our Doctors</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img src={doc.img} alt={doc.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg">{doc.name}</h3>
                  <p className="text-secondary text-sm font-medium mt-1">{doc.specialty}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/doctors" className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md">
              Meet the Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Patient Stories</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-10">What Our Patients Say</h2>
          <div className="relative bg-light rounded-3xl p-8 md:p-12 border border-blue-100 min-h-[180px]">
            <div className="text-yellow-400 text-lg mb-4">{'★'.repeat(testimonials[activeTestimonial].rating)}</div>
            <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
              &ldquo;{testimonials[activeTestimonial].text}&rdquo;
            </p>
            <div className="font-bold text-gray-800">{testimonials[activeTestimonial].name}</div>
            <div className="text-gray-400 text-sm">{testimonials[activeTestimonial].loc}</div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-primary w-6' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1400&h=500&fit=crop&auto=format&q=70"
          alt="Medical team"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Take Care of Your Health?</h2>
          <p className="text-blue-200 text-lg mb-8">Book an appointment today — our doctors are ready to see you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/appointment"
              className="bg-secondary hover:bg-emerald-600 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-200 text-lg">
              📅 Book Now
            </Link>
            <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"
              className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-lg">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
