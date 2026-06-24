import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WHATSAPP_NUMBER = "256700000000"  // UPDATE: replace with real number

const SERVICES = [
  'General Medicine', 'Maternity Care', 'Pediatrics',
  'Laboratory Tests', 'Pharmacy', 'Emergency', 'Eye Care', 'Dental', 'Other',
]

export default function Appointment() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    service: '', date: '', time: '', message: ''
  })
  const [error, setError] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.phone || !form.service || !form.date) {
      setError('Please fill in all required fields.')
      return
    }

    // Build WhatsApp message
    const msg = [
      `📋 *New Appointment Request — St. Peters Medical Center*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `✉️ *Email:* ${form.email}` : '',
      `🩺 *Service:* ${form.service}`,
      `📅 *Date:* ${form.date}`,
      form.time ? `🕐 *Time:* ${form.time}` : '',
      form.message ? `💬 *Note:* ${form.message}` : '',
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      <Head>
        <title>Book Appointment | St. Peters Medical Center</title>
        <meta name="description" content="Book an appointment at St. Peters Medical Center in Kyenjojo. Fast, easy booking via WhatsApp." />
      </Head>
      <Navbar />

      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-blue-200 text-lg">Fill in the form — it opens WhatsApp to notify our team instantly</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-light rounded-3xl p-8 md:p-10 shadow-sm space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input required name="name" value={form.name} onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                <input required name="phone" value={form.phone} onChange={handleChange}
                  type="tel" placeholder="e.g. 0700 000000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input name="email" value={form.email} onChange={handleChange}
                type="email" placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
                <select required name="service" value={form.service} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Select a service</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date *</label>
                <input required name="date" value={form.date} onChange={handleChange}
                  type="date" min={today}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Preferred Time <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <select name="time" value={form.time} onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                <option value="">Any time</option>
                {['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Additional Message <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                placeholder="Tell us more about your condition or any special needs..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-white" />
            </div>

            <button type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.853L0 24l6.313-1.496A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.5-5.19-1.374l-.373-.22-3.747.888.937-3.638-.243-.386A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Send via WhatsApp to Clinic
            </button>

            <p className="text-center text-gray-400 text-xs">
              Clicking the button opens WhatsApp with your appointment details pre-filled and sent to our team.
            </p>
          </form>

          {/* Alternative contact */}
          <div className="mt-8 text-center bg-light rounded-2xl p-6">
            <p className="text-gray-600 font-medium mb-3">Prefer to call directly?</p>
            <a href="tel:256700000000"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
