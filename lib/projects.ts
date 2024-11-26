export interface ProjectLinks {
  github: string;
  live?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLinks;
}

export const PROJECTS: Project[] = [
  {
    title: 'The Pixel Store',
    description: 'An App Store inspired by Apple\'s design, built with React and Framework7. Features a clean, modern interface with smooth animations.',
    image: 'https://placehold.co/1200x630/1a1a1a/FFFFFF/png?text=Pixel+Store',
    tags: ['React', 'Framework7', 'CSS3'],
    links: {
      github: 'https://github.com/iambhvsh/thepixelstore',
      live: 'https://thepixelstore.vercel.app'
    }
  },
  {
    title: 'DarkValor',
    description: 'A video streaming website using Invidious and Piped APIs. Modern interface with dark theme and seamless video playback.',
    image: 'https://placehold.co/1200x630/1a1a1a/FFFFFF/png?text=DarkValor',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'API'],
    links: {
      github: 'https://github.com/iambhvsh/DarkValor',
      live: 'https://darkvalor.vercel.app'
    }
  },
  {
    title: 'StackX',
    description: 'A Stack Overflow inspired Q&A platform with modern UI and enhanced features.',
    image: 'https://placehold.co/1200x630/1a1a1a/FFFFFF/png?text=StackX',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/iambhvsh/stackx',
      live: 'https://stackx.vercel.app'
    }
  },
  {
    title: 'Chat App',
    description: 'Real-time chat application with Firebase backend and modern UI.',
    image: 'https://placehold.co/1200x630/1a1a1a/FFFFFF/png?text=Chat+App',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'Firebase'],
    links: {
      github: 'https://github.com/iambhvsh/chat-app'
    }
  },
  {
    title: 'Forword',
    description: 'A dictionary application built with React and Ionic, providing comprehensive word lookups.',
    image: 'https://placehold.co/1200x630/1a1a1a/FFFFFF/png?text=Forword',
    tags: ['React', 'Ionic', 'API'],
    links: {
      github: 'https://github.com/iambhvsh/forword',
      live: 'https://forwordin.vercel.app'
    }
  },
  {
    title: 'ISS Live',
    description: 'Real-time International Space Station tracker with live location updates.',
    image: 'https://placehold.co/1200x630/1a1a1a/FFFFFF/png?text=ISS+Live',
    tags: ['HTML', 'Ionic', 'JavaScript'],
    links: {
      github: 'https://github.com/iambhvsh/iss-live',
      live: 'https://isslive.vercel.app'
    }
  }
]

export type SearchResultType = 'page' | 'blog' | 'project' | 'social'

export interface SearchResult {
  id: string
  title: string
  description?: string
  url: string
  type: SearchResultType
  tags?: string[]
} 