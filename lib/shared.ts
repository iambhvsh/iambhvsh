import { 
  IconType,
} from 'react-icons'
import { 
  FaHome,
  FaFolder,
  FaBook,
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

type Page = {
  name: string
  path: string
  icon: IconType
  description: string
}

type SocialLink = {
  name: string
  url: string
  icon: IconType
}

type SiteData = {
  pages: Page[]
  social: SocialLink[]
}

export const SITE_DATA: SiteData = {
  pages: [
    {
      name: 'Home',
      path: '/',
      icon: FaHome,
      description: 'Welcome to my portfolio'
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: FaFolder,
      description: 'Explore my latest web development projects and applications'
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: FaBook,
      description: 'Articles and insights about web development, technology, and coding'
    },
    {
      name: 'About',
      path: '/about',
      icon: FaUser,
      description: 'Learn more about me, my skills, and my journey as a developer'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: FaEnvelope,
      description: 'Get in touch with me for collaborations or opportunities'
    },
    {
      name: 'Education',
      path: '/education',
      icon: FaGraduationCap,
      description: 'My academic background and learning journey'
    },
    {
      name: 'Search',
      path: '/search',
      icon: FiSearch,
      description: 'Search for anything on the internet'
    }
  ] satisfies Page[],
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/iambhvsh',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/iambhvsh',
      icon: FaLinkedin
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iambhvsh',
      icon: FaTwitter
    }
  ]
}

export const AUTHOR = {
  name: 'Bhavesh Patil',
  image: 'https://github.com/iambhvsh.png',
  twitter: '@iambhvsh',
  github: 'iambhvsh',
  email: 'iambhvsh@gmail.com',
  location: 'India'
} as const

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
