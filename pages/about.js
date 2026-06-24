import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const values = [
  { icon: '❤️', title: 'Compassion',  desc: 'Every patient is treated with kindness, dignity and genuine care.' },
  { icon: '🎯', title: 'Excellence',  desc: 'We maintain the highest medical standards in everything we do.' },
  { icon: '🤝', title: 'Integrity',   desc: 'Honest, transparent communication with every patient and family.' },
  { icon: '👥', title: 'Teamwork',    desc: 'Our doctors, nurses and staff work together as one family.' },
]

const milestones = [
  { year: '2014', title: 'Founded',              desc: 'St. Peters Medical Center opened its doors on Kagadi Road, Kyenjojo.' },
  { year: '2016', title: 'Lab Expanded',         desc: 'Added a fully equipped diagnostic laboratory for faster, accurate results.' },
  { year: '2019', title: 'Maternity Wing',       desc: 'Opened a dedicated maternity ward to serve mothers across Western Uganda.' },
  { year: '2022', title: '5,000 Patients',       desc: 'Reached a milestone of over 5,000 patients served in the community.' },
  { year: '2024', title: 'New OPD Block',        desc: 'Launched expanded outpatient department with modern consultation rooms.' },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | St. Peters Medical Center</title>
        <meta name="description" content="Learn about St. Peters Medical Center — our mission, vision, values and the dedicated team behind quality healthcare in Kyenjojo." />
      </Head>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative text-white py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1400&h=600&fit=crop&auto=format&q=75"
          alt="Hospital exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/75 to-blue-900/60" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">🏥 About Us</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">About St. Peters Medical Center</h1>
          <p className="text-blue-200 text-lg">Committed to your health. Rooted in Kyenjojo.</p>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-5">Built on a Foundation of Care</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              St. Peters Medical Center was established with one simple goal — to bring quality healthcare closer to the people of Kyenjojo. Located on Kagadi Road in the heart of Kyenjojo Town, we have grown into a trusted medical facility serving thousands of patients every year.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of dedicated doctors, nurses, and support staff work tirelessly to ensure that every patient receives the best possible care. From routine check-ups to emergency situations, we are always here for you.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-primary">10+</div>
                <div className="text-gray-500 text-sm">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-secondary">5,000+</div>
                <div className="text-gray-500 text-sm">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600">20+</div>
                <div className="text-gray-500 text-sm">Medical Staff</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&h=520&fit=crop&auto=format&q=80"
              alt="Medical team at work"
              className="w-full rounded-3xl shadow-xl object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 bg-secondary text-white rounded-2xl px-5 py-3 shadow-lg">
              <div className="font-black text-2xl">24/7</div>
              <div className="text-xs text-green-100">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-blue-50">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">To provide accessible, compassionate and quality healthcare services to every individual and family in Kyenjojo and the surrounding communities.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-blue-50">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">To be the leading healthcare institution in Western Uganda, known for excellence, trust, and patient-centered care.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-blue-50">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Compassion, integrity, excellence, teamwork and respect for every patient who walks through our doors.</p>
            </div>
          </div>

          {/* Values grid with images */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Inside Our Facility</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">A Welcoming, Modern Environment</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&h=480&fit=crop&auto=format&q=75', alt: 'Hospital ward', className: 'md:col-span-2 aspect-video' },
              { src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=500&h=480&fit=crop&auto=format&q=75', alt: 'Doctor consultation', className: 'aspect-video' },
              { src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=500&h=480&fit=crop&auto=format&q=75', alt: 'Laboratory', className: 'aspect-video' },
              { src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=480&fit=crop&auto=format&q=75', alt: 'Nursing care', className: 'aspect-video' },
              { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=480&fit=crop&auto=format&q=75', alt: 'Reception', className: 'md:col-span-2 aspect-video' },
            ].map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-xl group ${img.className}`}>
                <img src={img.src} alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">Our Journey</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">Key Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {m.year}
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1">
                    <h4 className="font-bold text-gray-800">{m.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the St. Peters Difference?</h2>
        <p className="text-blue-200 mb-6">Book an appointment with one of our specialists today.</p>
        <Link href="/appointment" className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition text-lg inline-block shadow-md">
          Book an Appointment →
        </Link>
      </section>

      <Footer />
    </>
  )
}
