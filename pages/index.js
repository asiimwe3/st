import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  { icon: '🩺', title: 'General Medicine', desc: 'Comprehensive diagnosis and treatment for adults and children.' },
  { icon: '🤱', title: 'Maternity Care', desc: 'Safe, professional care for mothers and newborns throughout pregnancy.' },
  { icon: '🧪', title: 'Laboratory', desc: 'Accurate and fast diagnostic lab tests for all your health needs.' },
  { icon: '💊', title: 'Pharmacy', desc: 'Well-stocked pharmacy with quality medicines available on-site.' },
  { icon: '🚨', title: 'Emergency Care', desc: '24/7 emergency services ready to handle critical conditions.' },
  { icon: '👶', title: 'Pediatrics', desc: 'Specialized care for infants, toddlers, and children of all ages.' },
]

const stats = [
  { number: '10+', label: 'Years of Service' },
  { number: '5,000+', label: 'Patients Served' },
  { number: '20+', label: 'Medical Staff' },
  { number: '24/7', label: 'Emergency Care' },
]

const testimonials = [
  { name: 'Sarah K.', text: 'The doctors and nurses at St. Peters are amazing. Very professional and caring. I felt safe throughout my delivery.', location: 'Kyenjojo' },
  { name: 'James M.', text: 'Quick service and accurate diagnosis. The lab results were ready in no time. Highly recommend this facility.', location: 'Kagadi' },
  { name: 'Grace N.', text: 'St. Peters Medical Center has the best maternity care in the area. I trust them fully with my family\'s health.', location: 'Kyenjojo' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>St. Peters Medical Center | Quality Healthcare in Kyenjojo</title>
        <meta name="description" content="St. Peters Medical Center — trusted, compassionate healthcare in Kyenjojo Town, Kagadi Road. Book appointments, emergency care, maternity, lab and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient text-white min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-6 inline-block">
              🏥 Kyenjojo's Trusted Medical Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Health,<br />
              <span className="text-green-300">Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              St. Peters Medical Center provides compassionate, quality healthcare services to the people of Kyenjojo and surrounding communities. We are here for you — every day, every hour.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition text-lg">
                Book Appointment
              </Link>
              <Link href="/services" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition text-lg">
                Our Services
              </Link>
            </div>
          </div>

          {/* Right side card */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p>Kyenjojo Town, Kagadi Road</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-semibold text-white">Working Hours</p>
                    <p>Mon – Sat: 8:00AM – 6:00PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <p className="font-semibold text-white">Emergency</p>
                    <p className="text-green-300 font-bold">Available 24/7</p>
                  </div>
                </div>
              </div>
              <Link href="/appointment" className="mt-6 block bg-secondary text-white text-center py-3 rounded-full font-bold hover:bg-green-700 transition">
                Book Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-green-300">{s.number}</p>
              <p className="text-blue-200 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Our Medical Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We provide a wide range of healthcare services to meet your needs with compassion and expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100 group">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Why St. Peters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Healthcare You Can Trust</h2>
            <div className="space-y-5">
              {[
                { icon: '✅', title: 'Experienced Medical Team', desc: 'Our doctors and nurses bring years of experience and genuine compassion.' },
                { icon: '🏥', title: 'Modern Facilities', desc: 'Equipped with modern diagnostic and treatment equipment.' },
                { icon: '💰', title: 'Affordable Care', desc: 'Quality healthcare that is accessible and affordable for every family.' },
                { icon: '❤️', title: 'Patient-Centered', desc: 'Every patient is treated with dignity, respect and personal attention.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-2xl mt-1">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-light rounded-3xl p-10 text-center">
            <div className="text-8xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold text-primary">St. Peters Medical Center</h3>
            <p className="text-gray-500 mt-2">Kyenjojo Town, Kagadi Road</p>
            <p className="text-secondary font-semibold mt-1">Serving the Community Since Day One</p>
            <Link href="/about" className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <p className="text-yellow-400 text-xl mb-3">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Visit Us?</h2>
          <p className="text-blue-200 text-lg mb-8">Book your appointment today or walk in anytime. Our team is ready to help you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition text-lg">
              Book Appointment
            </Link>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/256700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-green-600 transition z-50"
        title="Chat on WhatsApp"
      >
        💬
      </a>

      <Footer />
    </>
  )
}
