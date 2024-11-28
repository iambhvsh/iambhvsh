import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="w-full max-w-lg text-center space-y-8">
        {/* 404 Illustration */}
        <div className="relative w-full h-48 md:h-64 mb-8">
          <Image
            src="/images/404.svg"
            alt="404 Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              404
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Action Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity group"
        >
          <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
    </div>
  )
} 