import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-blue-500">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
} 