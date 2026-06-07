import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
                  <p className="text-gray-500">Coming Soon</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-2xl flex-shrink-0">✉️</div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-500">Coming Soon</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-2xl flex-shrink-0">🕐</div>
                <div>
                  <p className="font-semibold text-gray-800">Working Hours</p>
                  <p className="text-gray-500">Monday – Saturday: 8:00AM – 6:00PM</p>
                  <p className="text-red-500 font-semibold">Emergency: Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-light rounded-3xl flex items-center justify-center h-80 md:h-auto">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="font-semibold text-gray-600">Kyenjojo Town, Kagadi Road</p>
              <p className="text-sm mt-1">Google Maps coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
