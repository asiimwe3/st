import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PHONE = "256782460683"

const doctors = [
  {
    name: 'Dr. Emmanuel Mugisha',
    specialty: 'General Medicine',
    qualification: 'MBChB, Makerere University',
    experience: '8+ Years',
    languages: 'English, Luganda, Rutooro',
    bio: 'Experienced general practitioner with over 8 years serving the Kyenjojo community. Specializes in diagnosis and management of chronic and infectious diseases.',
    initials: 'EM',
    color: 'bg-primary',
    days: 'Mon, Wed, Fri',
    hours: '9AM – 4PM',
  },
  {
    name: 'Dr. Grace Naturinda',
    specialty: 'Maternity & OB/GYN',
    qualification: 'MBChB, Mbarara University',
    experience: '12+ Years',
    languages: 'English, Rutooro',
    bio: 'Dedicated obstetrician and gynecologist passionate about safe motherhood. Has assisted in over 1,000 deliveries across Western Uganda.',
    initials: 'GN',
    color: 'bg-secondary',
    days: 'Tue, Thu, Sat',
    hours: '8AM – 3PM',
  },
  {
    name: 'Dr. Robert Bwambale',
    specialty: 'Pediatrics',
    qualification: 'MBChB, Kampala International University',
    experience: '6+ Years',
    languages: 'English, Rutooro, Swahili',
    bio: 'Compassionate pediatrician providing expert care for infants and children. Committed to child health and vaccination programs in Kyenjojo District.',
    initials: 'RB',
    color: 'bg-blue-600',
    days: 'Mon – Sat',
    hours: '10AM – 5PM',
  },
]

const staff = [
  { role: 'Head Nurse',            icon: '👩‍⚕️', desc: 'Leading our nursing team with over 10 years of clinical experience.' },
  { role: 'Laboratory Technician', icon: '🧪',   desc: 'Providing fast, accurate diagnostic lab results for all patients.' },
  { role: 'Pharmacist',            icon: '💊',   desc: 'Ensuring patients receive the right medicines safely and affordably.' },
  { role: 'Midwife',               icon: '🤱',   desc: 'Skilled birth attendant supporting mothers through every stage of delivery.' },
  { role: 'Radiographer',          icon: '🩻',   desc: 'Operating our imaging equipment for accurate diagnostic scans.' },
  { role: 'Nutrition Counsellor',  icon: '🥗',   desc: 'Guiding patients on diet and nutrition for better health outcomes.' },
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
      <section className="hero-gradient text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">👨‍⚕️ Our Medical Team</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Meet Our Specialists</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">Experienced, certified, and compassionate — our doctors are here to take care of you and your family.</p>
        </div>
      </section>

      {/* Doctors grid */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100">
                {/* Header */}
                <div className={`${doc.color} p-8 text-white text-center`}>
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-3">
                    {doc.initials}
                  </div>
                  <h3 className="font-black text-xl">{doc.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{doc.specialty}</p>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>🎓</span><span>{doc.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>⏳</span><span>{doc.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>🗣️</span><span>{doc.languages}</span>
                  </div>
                  <div className="bg-light rounded-xl p-3 text-sm">
                    <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Available</p>
                    <p className="text-dark font-bold">{doc.days}</p>
                    <p className="text-secondary font-semibold">{doc.hours}</p>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pt-1">{doc.bio}</p>
                  <Link href="/appointment"
                    className="block text-center bg-primary text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition mt-2">
                    Book with Dr. {doc.name.split(' ').pop()} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support staff */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-dark mb-3">Our <span className="gradient-text">Support Staff</span></h2>
            <p className="text-gray-500">The dedicated team behind every great patient experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {staff.map((s, i) => (
              <div key={i} className="card-hover flex items-start gap-4 bg-light border border-blue-100 rounded-2xl p-6">
                <div className="text-4xl">{s.icon}</div>
                <div>
                  <h4 className="font-bold text-dark">{s.role}</h4>
                  <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 hero-gradient text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Book a Consultation Today</h2>
          <p className="text-blue-100 mb-8">Our specialists are ready to help. Walk in or book in advance.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary font-black px-8 py-3 rounded-full hover:bg-blue-50 transition shadow-lg">
              📅 Book Appointment
            </Link>
            <a href={`tel:+${PHONE}`} className="glass text-white font-bold px-8 py-3 rounded-full hover:bg-white/20 transition">
              📞 Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
