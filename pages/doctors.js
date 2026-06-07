import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const doctors = [
  { name: 'Dr. [Name]', specialty: 'General Medicine', bio: 'Experienced general practitioner dedicated to comprehensive patient care.', initials: 'DR' },
  { name: 'Dr. [Name]', specialty: 'Maternity & OB/GYN', bio: 'Specialist in maternal health, safe delivery and women\'s reproductive health.', initials: 'DR' },
  { name: 'Dr. [Name]', specialty: 'Pediatrics', bio: 'Compassionate pediatrician providing expert care for children of all ages.', initials: 'DR' },
]

export default function Doctors() {
  return (
    <>
      <Head>
        <title>Our Doctors | St. Peters Medical Center</title>
        <meta name="description" content="Meet the dedicated medical team at St. Peters Medical Center in Kyenjojo." />
      </Head>
      <Navbar />

      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Doctors</h1>
          <p className="text-blue-200 text-lg">A dedicated team of healthcare professionals committed to your wellbeing</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <p className="text-yellow-700 font-medium">👨‍⚕️ Doctor profiles will be updated soon. Contact us to learn more about our medical team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {doctors.map((d, i) => (
              <div key={i} className="text-center bg-light rounded-2xl p-8 hover:shadow-lg transition">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {d.initials}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{d.name}</h3>
                <p className="text-secondary font-medium mt-1">{d.specialty}</p>
                <p className="text-gray-500 text-sm mt-3">{d.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
