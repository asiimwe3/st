import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PHONE = "256782460683"

const SERVICES = [
  'General Medicine', 'Maternity Care', 'Pediatrics',
  'Laboratory Tests', 'Pharmacy', 'Emergency',
  'Immunization', 'Antenatal Care', 'HIV/AIDS Services',
  'Outpatient Consultation', 'Inpatient Admission', 'Other',
]

const TIMES = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]

export default function Appointment() {
  const [form, setForm]   = useState({ name:'', phone:'', email:'', service:'', date:'', time:'', message:'' })
  const [error, setError] = useState('')
  const [sent, setSent]   = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.phone || !form.service || !form.date) {
      setError('Please fill in all required fields.')
      return
    }
    const msg = [
      `📋 *Appointment Request — St. Peters Medical Center*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `✉️ *Email:* ${form.email}` : '',
      `🩺 *Service:* ${form.service}`,
      `📅 *Preferred Date:* ${form.date}`,
      form.time ? `🕐 *Preferred Time:* ${form.time}` : '',
      form.message ? `💬 *Notes:* ${form.message}` : '',
      ``,
      `_Sent from St. Peters website_`,
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  const today = new Date().toISOString().split('T')[0]

  const steps = [
    { icon: '📋', label: 'Fill the form',     desc: 'Enter your details and preferred date.' },
    { icon: '💬', label: 'Send via WhatsApp', desc: 'Your request goes directly to reception.' },
    { icon: '✅', label: 'Get confirmed',      desc: 'We confirm your slot within minutes.' },
    { icon: '🏥', label: 'Visit us',           desc: 'Come in and receive quality care.' },
  ]

  return (
    <>
      <Head>
        <title>Book Appointment | St. Peters Medical Center</title>
        <meta name="description" content="Book an appointment at St. Peters Medical Center in Kyenjojo. Fast, easy booking via WhatsApp." />
      </Head>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 text-center relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">📅 Easy Booking</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Book Your Appointment</h1>
          <p className="text-blue-100 text-lg">Quick, easy, and confirmed within minutes via WhatsApp.</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="text-center p-4">
              <div className="w-14 h-14 bg-light rounded-full flex items-center justify-center text-3xl mx-auto mb-3">{s.icon}</div>
              <div className="text-xs font-black text-primary uppercase tracking-wider mb-1">Step {i+1}</div>
              <div className="font-bold text-dark text-sm mb-1">{s.label}</div>
              <div className="text-gray-500 text-xs">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-20 section-gradient">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-5 gap-10">

          {/* Left — form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-3xl shadow-card-lg p-8">
              <h2 className="text-2xl font-black text-dark mb-6">Appointment Details</h2>

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-dark mb-2">Request Sent!</h3>
                  <p className="text-gray-500 mb-6">Your appointment request has been sent via WhatsApp. We will confirm your slot shortly.</p>
                  <button onClick={() => setSent(false)} className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition">
                    Book Another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                        placeholder="e.g. John Mukasa" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                        placeholder="+256 700 000 000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address <span className="text-gray-400 font-normal">(optional)</span></label>
                    <input name="email" value={form.email} onChange={handleChange} type="email"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                      placeholder="you@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Service Needed <span className="text-red-500">*</span></label>
                    <select name="service" value={form.service} onChange={handleChange} required
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition bg-white">
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Preferred Date <span className="text-red-500">*</span></label>
                      <input name="date" value={form.date} onChange={handleChange} required type="date" min={today}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Preferred Time</label>
                      <select name="time" value={form.time} onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition bg-white">
                        <option value="">Any time</option>
                        {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Additional Notes</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
                      placeholder="Any symptoms, special requirements, or questions for the doctor..." />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">⚠️ {error}</div>
                  )}

                  <button type="submit"
                    className="w-full bg-secondary text-white font-black py-4 rounded-xl text-lg hover:bg-emerald-700 transition-all duration-200 shadow-glow-green flex items-center justify-center gap-3">
                    <span>💬</span> Send via WhatsApp
                  </button>
                  <p className="text-center text-gray-400 text-xs">You will be redirected to WhatsApp to confirm your request.</p>
                </form>
              )}
            </div>
          </div>

          {/* Right — info sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-card p-6">
              <h3 className="font-black text-dark text-lg mb-4">🕐 Opening Hours</h3>
              {[
                ['Mon – Fri',     '8:00 AM – 6:00 PM'],
                ['Saturday',      '8:00 AM – 4:00 PM'],
                ['Sunday',        '10:00 AM – 2:00 PM'],
                ['Emergency',     '24 Hours / 7 Days'],
              ].map(([d,h]) => (
                <div key={d} className="flex justify-between py-2 border-b border-gray-100 last:border-0 text-sm">
                  <span className="text-gray-600 font-medium">{d}</span>
                  <span className="text-dark font-bold">{h}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-600 text-white rounded-3xl p-6 text-center">
              <div className="text-4xl mb-2">🚨</div>
              <h3 className="font-black text-xl mb-1">Emergency?</h3>
              <p className="text-red-100 text-sm mb-4">Don&apos;t wait — call us immediately.</p>
              <a href={`tel:+${PHONE}`} className="block bg-white text-red-600 font-black py-3 rounded-xl hover:bg-red-50 transition">
                Call Now
              </a>
            </div>

            <div className="bg-light border border-blue-100 rounded-3xl p-6">
              <h3 className="font-black text-dark text-lg mb-3">📍 Find Us</h3>
              <p className="text-gray-500 text-sm">Kyenjojo Town, Kagadi Road, Western Uganda</p>
              <a href="https://maps.google.com/?q=Kyenjojo+Town+Uganda" target="_blank" rel="noreferrer"
                className="inline-block mt-3 text-primary text-sm font-bold hover:underline">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
