import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WHATSAPP_NUMBER = "256700000000"  // UPDATE: replace with real number

const SERVICES = [
  'General Medicine',
  'Maternity Care',
  'Pediatrics',
  'Laboratory Tests',
  'Pharmacy',
  'Emergency',
  'Eye Care',
  'Dental',
  'Other',
]

export default function Appointment() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    service: '', date: '', time: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Save to API
      const res = await fetch('/api/save-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Submission failed')

      // Also open WhatsApp with pre-filled message for instant clinic notification
      const msg = [
        `📋 *New Appointment Request*`,
        `👤 Name: ${form.name}`,
        `📞 Phone: ${form.phone}`,
        form.email ? `✉️ Email: ${form.email}` : '',
        `🩺 Service: ${form.service}`,
        `📅 Date: ${form.date}`,
        form.time ? `🕐 Time: ${form.time}` : '',
        form.message ? `💬 Note: ${form.message}` : '',
      ].filter(Boolean).join('\n')

      // Open WhatsApp in new tab so user stays on confirmation page
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')

      setSubmitted(true)
    } catch (err) {
      setError('Sorry, something went wrong. Please try again or call us directly.')
    }

    setLoading(false)
  }

  // Get today's date string for min date picker
  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      <Head>
        <title>Book Appointment | St. Peters Medical Center</title>
        <meta name="description" content="Book an appointment at St. Peters Medical Center in Kyenjojo, Kagadi Road. Fast, easy online booking." />
      </Head>
      <Navbar />

      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-blue-200 text-lg">Fill in the form — we'll confirm via WhatsApp or phone call</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {submitted ? (
            <div className="text-center py-16 bg-light rounded-3xl p-10">
              <div className="text-7xl mb-6">✅</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Appointment Request Sent!</h2>
              <p className="text-gray-500 text-lg mb-3">
                Your request has been saved. A WhatsApp message has also been sent to our clinic — our team will confirm your appointment shortly.
              </p>
              <p className="text-gray-400 text-sm mb-8">If you don't hear back within 2 hours, please call us directly.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',service:'',date:'',time:'',message:'' }) }}
                  className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:opacity-90">
                  Book Another
                </button>
                <a href="/" className="border border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-blue-50">
                  Back to Home
                </a>
              </div>
            </div>
          ) : (
            <>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-6 text-sm">
                  {error}
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-gray-400 font-normal">(optional)</span></label>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Time <span className="text-gray-400 font-normal">(optional)</span></label>
                  <select name="time" value={form.time} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">Any time</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Message <span className="text-gray-400 font-normal">(optional)</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Tell us more about your condition or any special needs..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-white" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition disabled:opacity-60 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Submitting...
                    </>
                  ) : '📅 Submit Appointment Request'}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  After submitting, a WhatsApp message will open automatically to notify our team.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
