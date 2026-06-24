import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PHONE = "256700000000"

const doctors = [
  {
    name: 'Dr. Emmanuel Mugisha',
    specialty: 'General Medicine',
    qualification: 'MBChB, Makerere University',
    bio: 'Experienced general practitioner with over 8 years serving the Kyenjojo community. Specializes in diagnosis and management of chronic and infectious diseases.',
    initials: 'EM',
    color: 'bg-primary',
  },
  {
    name: 'Dr. Grace Naturinda',
    specialty: 'Maternity & OB/GYN',
    qualification: 'MBChB, Mbarara University',
    bio: 'Dedicated obstetrician and gynecologist passionate about safe motherhood. Has assisted in over 1,000 deliveries across Western Uganda.',
    initials: 'GN',
    color: 'bg-secondary',
  },
  {
    name: 'Dr. Robert Bwambale',
    specialty: 'Pediatrics',
    qualification: 'MBChB, Kampala International University',
    bio: 'Compassionate pediatrician providing expert care for infants and children. Committed to child health and vaccination programs in Kyenjojo District.',
    initials: 'RB',
    color: 'bg-blue-600',
  },
]

const staff = [
  { role: 'Head Nurse',           icon: '👩‍⚕️', desc: 'Leading our nursing team with over 10 years of clinical experience.' },
  { role: 'Laboratory Technician', icon: '🧪', desc: 'Providing fast, accurate diagnostic lab results for all patients.' },
  { role: 'Pharmacist',            icon: '💊', desc: 'Ensuring patients receive the right medicines safely and affordably.' },
  { role: 'Midwife',               icon: '🤱', desc: 'Skilled birth attendant supporting mothers through every stage of delivery.' },
]

export default function Doctors() {
  return (
    <>
      <Head>
        <title>Our Medical Team | St. Peters Medical Center</title>
        <meta name="description" content="Meet the dedicated doctors and healthcare professionals at St. Peters Medical Center in Kyenjojo." />
      </Head>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Medical Team</h1>
          <p className="text-blue-200 text-lg">Qualified, experienced, and dedicated to your health and wellbeing</p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Our Physicians</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">Doctors You Can Trust</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {doctors.map((d, i) => (
              <div key={i} className="text-center bg-light rounded-2xl p-8 hover:shadow-xl transition border border-blue-50">
                {/* Avatar */}
                <div className={`w-24 h-24 ${d.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5 shadow-lg`}>
                  {d.initials}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{d.name}</h3>
                <p className="text-secondary font-semibold mt-1 text-sm">{d.specialty}</p>
                <p className="text-gray-400 text-xs mt-1 mb-3 italic">{d.qualification}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{d.bio}</p>
                <Link href={`/appointment?service=${encodeURIComponent(d.specialty)}`}
                  className="inline-block bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                  Book with {d.name.split(' ')[1]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Staff */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Supporting Team</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">Our Healthcare Staff</h2>
            <p className="text-gray-500 mt-2">Behind every great doctor is an exceptional support team</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {staff.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h4 className="font-bold text-gray-800 text-sm mb-2">{s.role}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Want to Join Our Team?</h2>
          <p className="text-blue-200 mb-6">We are always looking for passionate healthcare professionals to serve our community.</p>
          <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello, I'm interested in joining the St. Peters Medical Center team.")}`}
            target="_blank" rel="noreferrer"
            className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition inline-block">
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
