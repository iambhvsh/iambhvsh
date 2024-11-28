import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiClock, FiMapPin } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/iambhvsh',
    icon: FaGithub,
    username: '@iambhvsh',
    color: 'hover:text-[#333] dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/iambhvsh',
    icon: FaLinkedin,
    username: 'Bhavesh',
    color: 'hover:text-[#0A66C2]'
  },
  {
    name: 'Email',
    url: 'mailto:iambhvsh@gmail.com',
    icon: FiMail,
    username: 'iambhvsh@gmail.com',
    color: 'hover:text-[#EA4335]'
  }
]

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-12">
      <div className="space-y-16">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Let&apos;s Connect</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
            Whether you have a project in mind, want to collaborate, or just want to say hi, 
            I&apos;d love to hear from you. Choose your preferred way to connect:
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-6 p-8 rounded-2xl bg-zinc-950 dark:hover:bg-zinc-900 transition-all hover:shadow-xl`}
            >
              <div className={`p-4 rounded-xl bg-zinc-800 ${link.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                <link.icon className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xl group-hover:text-blue-500 transition-colors">
                  {link.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {link.username}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid gap-12 sm:grid-cols-2">
          {/* Working Hours */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xl font-semibold">
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                <FiClock className="w-6 h-6" />
              </div>
              <h2>Working Hours</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 pl-16 text-lg">
              Monday — Friday<br />
              9:00 AM — 6:00 PM (IST)
            </p>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xl font-semibold">
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                <FiMapPin className="w-6 h-6" />
              </div>
              <h2>Location</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 pl-16 text-lg">
              Chattrapati Sambhajinagar, India<br />
              Available for remote work
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

