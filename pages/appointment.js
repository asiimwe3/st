import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Appointment() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Book Appointment | St. Peters Medical Center</title>
        <meta name="description" content="Book an appointment at St. Peters Medical Center in Kyenjojo, Kagadi Road." />
      </Head>
      <Navbar />

      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-blue-200 text-lg">Fill in the form and our team will confirm your appointment shortly</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {submitted ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Appointment Request Sent!</h2>
              <p className="text-gray-500 text-lg">Our team will contact you shortly to confirm your appointment. Thank you for choosing St. Peters Medical Center.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-light rounded-3xl p-10 shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your full name" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="e.g. 0700 000000" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Optional" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
                  <select required name="service" value={form.service} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">Select a service</option>
                    <option>General Medicine</option>
                    <option>Maternity Care</option>
                    <option>Pediatrics</option>
                    <option>Laboratory</option>
                    <option>Pharmacy</option>
                    <option>Emergency</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date *</label>
                  <input required name="date" value={form.date} onChange={handleChange} type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us more about your condition or concern..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition disabled:opacity-60">
                {loading ? 'Submitting...' : 'Submit Appointment Request →'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
