import { GraduationCap, Award, Book, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const education = [
  {
    period: '2024 - Present',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Dr. G. Y. Pathrikar College of Computer Science and IT, MGM University',
    description: 'Currently pursuing my degree with a focus on web development and software engineering.',
    icon: GraduationCap
  },
  {
    period: '2024',
    degree: 'Next.js Certification',
    institution: 'Programming Hub',
    description: 'Completed comprehensive Next.js course covering modern web development concepts and full-stack development.',
    icon: Award,
    certificateLink: '/images/nextjs-certificate.jpg'
  },
  {
    period: '2023 - 2024',
    degree: 'Higher Secondary Education',
    institution: 'DES, High School, Malkapur',
    description: 'Completed HSC with focus on Physics and Mathematics.',
    icon: Book
  },
  {
    period: '2022 - 2023',
    degree: 'Secondary Education',
    institution: 'MIT VGS, Chattrapati Sambhajinagar',
    description: 'Completed SSC with distinction.',
    icon: Award
  }
]

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      <div className="mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Education & Certifications
        </h1>
        <p className="text-lg text-gray-400/80 max-w-2xl">
          My academic journey, qualifications, and professional certifications.
        </p>
      </div>

      <div className="relative border-l-2 border-zinc-800 ml-3">
        {education.map((item, index) => (
          <div key={index} className="mb-12 ml-6">
            <div className="absolute w-8 h-8 bg-zinc-900 rounded-full -left-[1.15rem] flex items-center justify-center border-2 border-zinc-800">
              <item.icon className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-blue-400 font-medium mb-2">
                {item.period}
              </span>
              <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                {item.degree}
              </h3>
              <span className="text-gray-400 text-sm mb-2">
                {item.institution}
              </span>
              <p className="text-gray-500">
                {item.description}
              </p>
              {item.certificateLink && (
                <div className="mt-4">
                  <Link 
                    href={item.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
