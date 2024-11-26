import { 
  LucideIcon,
  HomeIcon,
  FolderIcon, 
  BookIcon,
  UserIcon,
  MailIcon,
  GraduationCapIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  SearchIcon
} from 'lucide-react'

type Page = {
  name: string
  path: string
  icon: LucideIcon
  description: string
}

type SocialLink = {
  name: string
  url: string
  icon: LucideIcon
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
      icon: HomeIcon,
      description: 'Welcome to my portfolio'
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: FolderIcon,
      description: 'Explore my latest web development projects and applications'
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: BookIcon,
      description: 'Articles and insights about web development, technology, and coding'
    },
    {
      name: 'About',
      path: '/about',
      icon: UserIcon,
      description: 'Learn more about me, my skills, and my journey as a developer'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: MailIcon,
      description: 'Get in touch with me for collaborations or opportunities'
    },
    {
      name: 'Education',
      path: '/education',
      icon: GraduationCapIcon,
      description: 'My academic background and learning journey'
    },
    {
      name: 'Search',
      path: '/search',
      icon: SearchIcon,
      description: 'Search for anything on the internet'
    }
  ] satisfies Page[],
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/iambhvsh',
      icon: GithubIcon
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/iambhvsh',
      icon: LinkedinIcon
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iambhvsh',
      icon: TwitterIcon
    }
  ]
}

export const AUTHOR = {
  name: "Bhavesh Patil",
  image: "https://github.com/iambhvsh.png",
  location: "Chattrapati Sambhajinagar, India",
  email: "iambhvshh@gmail.com"
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}
