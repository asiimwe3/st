import Link from 'next/link'
import Head from 'next/head'

export default function NotFound() {
  return (
    <>
      <Head><title>Page Not Found | St. Peters Medical Center</title></Head>
      <div className="min-h-screen hero-gradient flex items-center justify-center text-white px-4">
        <div className="text-center">
          <div className="text-8xl font-bold mb-4 text-green-300">404</div>
          <h1 className="text-3xl font-bold mb-3">Page Not Found</h1>
          <p className="text-blue-200 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition">
              Go Home
            </Link>
            <Link href="/appointment" className="border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
