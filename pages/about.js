import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | St. Peters Medical Center</title>
        <meta name="description" content="Learn about St. Peters Medical Center — our mission, vision, values and the dedicated team behind quality healthcare in Kyenjojo." />
      </Head>
      <Navbar />

      {/* Page Hero */}
      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About St. Peters Medical Center</h1>
          <p className="text-blue-200 text-lg">Committed to your health. Rooted in Kyenjojo.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="text-center p-8 bg-light rounded-2xl">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm">To provide accessible, compassionate and quality healthcare services to every individual and family in Kyenjojo and the surrounding communities.</p>
          </div>
          <div className="text-center p-8 bg-light rounded-2xl">
            <div className="text-5xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm">To be the leading healthcare institution in Western Uganda, known for excellence, trust, and patient-centered care.</p>
          </div>
          <div className="text-center p-8 bg-light rounded-2xl">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
            <p className="text-gray-600 text-sm">Compassion, integrity, excellence, teamwork and respect for every patient who walks through our doors.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Built on a Foundation of Care</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            St. Peters Medical Center was established with one simple goal — to bring quality healthcare closer to the people of Kyenjojo. Located on Kagadi Road in the heart of Kyenjojo Town, we have grown into a trusted medical facility serving thousands of patients every year.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team of dedicated doctors, nurses, and support staff work tirelessly to ensure that every patient receives the best possible care. From routine check-ups to emergency situations, we are always here for you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the St. Peters Difference?</h2>
        <Link href="/appointment" className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition text-lg inline-block">
          Book an Appointment
        </Link>
      </section>

      <Footer />
    </>
  )
}
