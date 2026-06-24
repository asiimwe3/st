import Link from 'next/link'
import Head from 'next/head'

export default function ServerError() {
  return (
    <>
      <Head><title>Server Error | St. Peters Medical Center</title></Head>
      <div className="min-h-screen hero-gradient flex items-center justify-center text-white px-4">
        <div className="text-center">
          <div className="text-8xl font-bold mb-4 text-red-300">500</div>
          <h1 className="text-3xl font-bold mb-3">Something Went Wrong</h1>
          <p className="text-blue-200 mb-8">We're experiencing a technical issue. Please try again or call us directly.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition">
              Go Home
            </Link>
            <a href="tel:256700000000" className="border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
