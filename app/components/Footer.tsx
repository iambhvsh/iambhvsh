import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { name: 'Source', url: 'https://github.com/iambhvsh/iambhvsh', icon: FaCode, hoverColor: 'hover:text-emerald-400' },
  { name: 'GitHub', url: 'https://github.com/iambhvsh', icon: FaGithub, hoverColor: 'hover:text-purple-400' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/iambhvsh/', icon: FaLinkedin, hoverColor: 'hover:text-blue-400' },
]

export default function Footer() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <footer className="bg-black text-white py-8 md:py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 md:mb-0">
            <div className="text-center md:hidden">
              <p className="text-sm text-gray-300/90">Site last updated on:</p>
              <p className="text-sm text-gray-300/60">{lastUpdated}</p>
            </div>
            <p className="text-sm text-gray-300/70 flex items-center gap-1">
              Made with{' '}
              <Image
                src="https://em-content.zobj.net/source/apple/118/heavy-black-heart_2764.png"
                alt="heart"
                width={16}
                height={16}
                className="inline-block"
                priority
              />{' '}
              by{' '}
              <a 
                href="#" 
                className="text-white hover:text-gray-300 transition-all duration-300"
              >
                iambhvsh
              </a>
            </p>
          </div>

          <div className="hidden md:block text-center">
            <p className="text-sm text-gray-300/90">Site last updated on:</p>
            <p className="text-sm text-gray-300/60">{lastUpdated}</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className={`text-gray-400 transform hover:scale-110 transition-all duration-300 ${link.hoverColor}`}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={22} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
