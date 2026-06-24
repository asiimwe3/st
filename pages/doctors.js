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
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop&crop=face&auto=format&q=80',
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
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face&auto=format&q=80',
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
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=500&fit=crop&crop=face&auto=format&q=80',
    color: 'bg-blue-600',
    days: 'Mon – Sat',
    hours: '10AM – 5PM',
  },
]

const staff = [
  { role: 'Head Nurse',            icon: '👩‍⚕️', desc: 'Leading our nursing team with over 10 years of clinical experience.',
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&crop=face&auto=format&q=75' },
  { role: 'Laboratory Technician', icon: '🧪',   desc: 'Providing fast, accurate diagnostic lab results for all patients.',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face&auto=format&q=75' },
  { role: 'Pharmacist',            icon: '💊',   desc: 'Ensuring patients receive the right medicines safely and affordably.',
    img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face&auto=format&q=75' },
  { role: 'Midwife',               icon: '🤱',   desc: 'Skilled birth attendant supporting mothers through every stage of delivery.',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face&auto=format&q=75' },
  { role: 'Radiographer',          icon: '🩻',   desc: 'Operating our imaging equipment for accurate diagnostic scans.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=300&fit=crop&crop=face&auto=format&q=75' },
  { role: 'Nutrition Counsellor',  icon: '🥗',   desc: 'Guiding patients on diet and nutrition for better health outcomes.',
    img: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=300&h=300&fit=crop&crop=face&auto=format&q=75' },
]

export default function Doctors() {
  return (
    <>
      <Head>
        <title>Our Medical Team | St. Peters Medical Center</title>
        <meta name="description" content="Meet the dedicated doctors and healthcare professionals at St. Peters Medical Center in Kyenjojo." />
      </Head>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative text-white py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&h=500&fit=crop&auto=format&q=75"
          alt="Medical team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/88 via-blue-800/70 to-blue-900/55" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">👨‍⚕️ Our Medical Team</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Meet Our Specialists</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">Experienced, certified, and compassionate — our doctors are here to take care of you and your family.</p>
        </div>
      </section>

      {/* ── DOCTORS GRID ─────────────────────────────────────────────────────── */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md card-hover">
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute bottom-4 left-4 ${doc.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {doc.specialty}
                  </span>
                </div>
                {/* Details */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-xl mb-1">{doc.name}</h3>
                  <p className="text-gray-500 text-xs mb-3">{doc.qualification}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{doc.bio}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-primary">🏆</span>
                      <span>{doc.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-primary">🌍</span>
                      <span>{doc.languages}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-primary">📅</span>
                      <span>{doc.days}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-primary">🕐</span>
                      <span>{doc.hours}</span>
                    </div>
                  </div>
                  <Link href="/appointment"
                    className="mt-5 block w-full text-center bg-primary text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT STAFF ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Support Team</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">The Team Behind the Scenes</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">Our specialist support staff ensure every aspect of your care is handled with expertise.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {staff.map((s, i) => (
              <div key={i} className="bg-light rounded-2xl overflow-hidden card-hover border border-blue-50">
                <div className="relative h-40 overflow-hidden">
                  <img src={s.img} alt={s.role}
                    className="w-full h-full object-cover object-top"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <h4 className="font-bold text-gray-800">{s.role}</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Book a Consultation Today</h2>
        <p className="text-blue-200 mb-6">Our doctors are available Monday – Saturday. Book your slot now.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/appointment"
            className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition shadow-md text-lg">
            📅 Book Appointment
          </Link>
          <a href={`tel:+${PHONE}`}
            className="bg-white/15 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/25 transition text-lg">
            📞 Call Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
