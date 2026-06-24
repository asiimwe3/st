import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const PHONE = "256700000000"        // UPDATE with real number
const PHONE_DISPLAY = "+256 700 000 000"  // UPDATE with real number
const EMAIL = "info@stpetersmedical.ug"   // UPDATE with real email

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | St. Peters Medical Center</title>
        <meta name="description" content="Get in touch with St. Peters Medical Center in Kyenjojo, Kagadi Road. Find our location, phone number and opening hours." />
      </Head>
      <Navbar />

      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg">We are here for you — reach out any time</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-500">Kyenjojo Town, Kagadi Road</p>
                  <p className="text-gray-500">Kyenjojo District, Uganda</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-2xl flex-shrink-0">📞</div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <a href={`tel:${PHONE}`} className="text-primary font-semibold hover:underline">{PHONE_DISPLAY}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.853L0 24l6.313-1.496A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.5-5.19-1.374l-.373-.22-3.747.888.937-3.638-.243-.386A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">WhatsApp</p>
                  <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"
                    className="text-green-600 font-semibold hover:underline">
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-2xl flex-shrink-0">✉️</div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-2xl flex-shrink-0">🕐</div>
                <div>
                  <p className="font-semibold text-gray-800">Working Hours</p>
                  <p className="text-gray-500">Monday – Saturday: 8:00AM – 6:00PM</p>
                  <p className="text-gray-500">Sunday: Emergencies only</p>
                  <p className="text-red-500 font-semibold mt-1">🚨 Emergency: Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Link href="/appointment"
                className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition">
                📅 Book Appointment
              </Link>
              <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition">
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Real Google Maps embed */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 h-96 md:h-auto">
            <iframe
              title="St. Peters Medical Center — Kyenjojo"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Kyenjojo+Town+Kagadi+Road+Uganda&output=embed"
            />
          </div>
        </div>
      </section>

      {/* Insurance / Payment info */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Payment & Insurance</h2>
          <p className="text-gray-500 mb-8">We accept multiple payment options to make healthcare accessible for everyone.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '💵', label: 'Cash' },
              { icon: '📱', label: 'Mobile Money' },
              { icon: '🏛️', label: 'NHIF' },
              { icon: '💳', label: 'Insurance Cards' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="font-semibold text-gray-700 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
