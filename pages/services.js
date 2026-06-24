import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PHONE = "256782460683"

const categories = ['All', 'Clinical', 'Diagnostic', 'Maternal', 'Emergency', 'Wellness']

const services = [
  { icon: '🩺', title: 'General Medicine',     category: 'Clinical',    price: 'From UGX 20,000', duration: '30 min',
    desc: 'Comprehensive diagnosis and treatment for a wide range of medical conditions in adults and children. Our experienced doctors provide thorough consultations and follow-up care.' },
  { icon: '🤱', title: 'Maternity Care',        category: 'Maternal',    price: 'Package available', duration: '9 months',
    desc: 'Expert care for mothers from conception through delivery and postnatal recovery. We ensure safe, comfortable and supportive birthing experiences with skilled midwives on call.' },
  { icon: '👶', title: 'Pediatrics',            category: 'Clinical',    price: 'From UGX 15,000', duration: '20 min',
    desc: 'Specialized medical care for infants, toddlers, and children. Regular check-ups, immunizations, and treatment for all childhood illnesses handled by our specialist pediatrician.' },
  { icon: '🧪', title: 'Laboratory Services',   category: 'Diagnostic',  price: 'From UGX 10,000', duration: '1–2 hrs',
    desc: 'Fast and accurate diagnostic lab tests — malaria, HIV, blood count, urinalysis, blood sugar, typhoid, hepatitis, and more. Results delivered same day.' },
  { icon: '💊', title: 'Pharmacy',              category: 'Wellness',    price: 'Prescription only', duration: 'Instant',
    desc: 'A fully stocked on-site pharmacy with quality medicines prescribed by our doctors. Accessible, affordable, and reliable — no need to travel elsewhere.' },
  { icon: '🚨', title: '24/7 Emergency Care',   category: 'Emergency',   price: 'Call first',       duration: '24/7',
    desc: 'Round-the-clock emergency medical services for accidents, critical conditions, trauma, and urgent health situations. Our emergency team is always ready.' },
  { icon: '💉', title: 'Immunization',          category: 'Wellness',    price: 'Free / Low cost',  duration: '15 min',
    desc: "Vaccination services for children and adults. We follow Uganda's national immunization schedule to protect your family from preventable diseases." },
  { icon: '🩻', title: 'Outpatient Clinic',     category: 'Clinical',    price: 'From UGX 10,000', duration: '20 min',
    desc: 'Daily outpatient consultations for non-emergency conditions. See a qualified doctor quickly without needing to be admitted to the hospital.' },
  { icon: '🛏️', title: 'Inpatient Admission',  category: 'Clinical',    price: 'From UGX 50,000/night', duration: 'As needed',
    desc: 'Clean, comfortable ward facilities for patients requiring extended medical care, post-operative recovery, or observation after a procedure.' },
  { icon: '🧬', title: 'HIV/AIDS Services',     category: 'Wellness',    price: 'Free',             duration: '45 min',
    desc: 'Confidential HIV testing, counselling, and ART management. We provide a safe, judgment-free environment for testing and ongoing care.' },
  { icon: '💆', title: 'Antenatal Care',        category: 'Maternal',    price: 'From UGX 25,000', duration: '45 min',
    desc: 'Comprehensive antenatal check-ups, scans guidance, nutrition advice, and birth planning sessions to ensure a healthy pregnancy journey.' },
  { icon: '🔬', title: 'Malaria Diagnosis',     category: 'Diagnostic',  price: 'UGX 5,000',       duration: '30 min',
    desc: 'Rapid malaria diagnosis using RDT and microscopy. Fast treatment with nationally approved antimalarial medicines for all age groups.' },
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory)

  return (
    <>
      <Head>
        <title>Our Services | St. Peters Medical Center</title>
        <meta name="description" content="Explore the full range of medical services at St. Peters Medical Center — General Medicine, Maternity, Lab, Pharmacy, Emergency and more." />
      </Head>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 text-center relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">🩺 Medical Services</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">What We Offer</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">Everything you need for complete family healthcare — all under one roof in Kyenjojo.</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200
                  ${activeCategory === cat ? 'bg-primary text-white shadow-glow-blue' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((s, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 shadow-card border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="icon-ring">{s.icon}</div>
                  <span className="text-xs bg-light text-primary font-semibold px-3 py-1 rounded-full">{s.category}</span>
                </div>
                <h3 className="font-black text-dark text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4 border-t border-gray-100 pt-3">
                  <span>💰 {s.price}</span>
                  <span>⏱ {s.duration}</span>
                </div>
                <Link href="/appointment"
                  className="block text-center bg-primary text-white text-sm font-bold py-2.5 rounded-xl hover:bg-blue-700 transition">
                  Book This Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-light border border-blue-100 rounded-3xl p-8">
            <div className="text-4xl mb-3">🏦</div>
            <h3 className="text-xl font-black text-dark mb-2">Insurance & Payment</h3>
            <p className="text-gray-500 text-sm mb-4">We accept cash payments and work with several insurance providers. Contact us to confirm your cover before visiting.</p>
            <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello, I'd like to confirm insurance coverage at St. Peters Medical Center.")}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-700 transition">
              💬 Ask via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
