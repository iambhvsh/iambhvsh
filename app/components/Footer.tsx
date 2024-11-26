import { CodeIcon, GithubIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { name: 'Source', url: 'https://github.com/iambhvsh/iambhvsh.com', icon: CodeIcon, hoverColor: 'hover:text-emerald-400' },
  { name: 'GitHub', url: 'https://github.com/iambhvsh', icon: GithubIcon, hoverColor: 'hover:text-purple-400' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/iambhvsh/', icon: LinkedinIcon, hoverColor: 'hover:text-blue-400' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-300/90 flex items-center gap-1">
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
                className="underline text-white hover:text-gray-300 transition-all duration-300"
              >
                iambhvsh
              </a>
            </p>
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
