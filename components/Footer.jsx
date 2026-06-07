import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-lg">SP</div>
            <div>
              <p className="font-bold text-lg leading-tight">St. Peters</p>
              <p className="text-secondary text-sm">Medical Center</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Providing compassionate, quality healthcare to the people of Kyenjojo and beyond.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
            <li><Link href="/doctors" className="hover:text-white transition">Our Doctors</Link></li>
            <li><Link href="/appointment" className="hover:text-white transition">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-secondary">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>General Medicine</li>
            <li>Maternity & Pediatrics</li>
            <li>Laboratory</li>
            <li>Pharmacy</li>
            <li>Emergency Care</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-secondary">Contact Us</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 Kyenjojo Town, Kagadi Road</li>
            <li>📞 Coming Soon</li>
            <li>✉️ Coming Soon</li>
            <li>🕐 Mon–Sat: 8:00AM – 6:00PM</li>
            <li className="text-red-400 font-semibold">🚨 Emergency: 24/7</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <p>© 2026 St. Peters Medical Center. All rights reserved.</p>
        <p>Designed with ❤️ for better healthcare</p>
      </div>
    </footer>
  )
}
