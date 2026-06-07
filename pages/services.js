import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  { icon: '🩺', title: 'General Medicine', desc: 'Comprehensive diagnosis and treatment for a wide range of medical conditions in adults and children. Our experienced doctors provide thorough consultations and follow-up care.' },
  { icon: '🤱', title: 'Maternity Care', desc: 'Expert care for mothers from conception through delivery and postnatal recovery. We ensure safe, comfortable and supportive birthing experiences.' },
  { icon: '👶', title: 'Pediatrics', desc: 'Specialized medical care for infants, toddlers, and children. Regular check-ups, immunizations, and treatment for childhood illnesses.' },
  { icon: '🧪', title: 'Laboratory Services', desc: 'Fast and accurate diagnostic laboratory tests including blood tests, urinalysis, malaria tests, HIV testing, and more.' },
  { icon: '💊', title: 'Pharmacy', desc: 'A fully stocked on-site pharmacy with quality medicines prescribed by our doctors. Accessible, affordable, and reliable.' },
  { icon: '🚨', title: '24/7 Emergency Care', desc: 'Round-the-clock emergency medical services for accidents, critical conditions, and urgent health situations. We are always ready.' },
  { icon: '💉', title: 'Immunization', desc: 'Vaccination services for children and adults. We follow Uganda\'s national immunization schedule to protect your family.' },
  { icon: '🩻', title: 'Outpatient Clinic', desc: 'Daily outpatient consultations for non-emergency medical conditions. Get seen by a doctor quickly without admission.' },
  { icon: '🛏️', title: 'Inpatient Admission', desc: 'Clean, comfortable ward facilities for patients who require extended medical care and monitoring.' },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | St. Peters Medical Center</title>
        <meta name="description" content="Explore the full range of medical services at St. Peters Medical Center — from general medicine to maternity, lab, pharmacy, and emergency care." />
      </Head>
      <Navbar />

      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Services</h1>
          <p className="text-blue-200 text-lg">Comprehensive healthcare for you and your family</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-light rounded-2xl p-8 hover:shadow-lg transition border border-blue-100 group">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Service Not Listed?</h2>
        <p className="text-green-100 mb-6">Contact us and our team will assist you with any health concern.</p>
        <Link href="/contact" className="bg-white text-secondary font-bold px-8 py-3 rounded-full hover:bg-green-50 transition inline-block">
          Contact Us
        </Link>
      </section>

      <Footer />
    </>
  )
}
