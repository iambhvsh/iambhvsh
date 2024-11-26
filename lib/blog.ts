import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'app/blog/posts')

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
  tags: string[]
  coverImage?: string
}

export function getAllPosts(): BlogPost[] {
  // Ensure the posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || '',
        content,
        readingTime: readingTime(content).text,
        tags: data.tags || [],
        coverImage: data.coverImage || undefined
      }
    })
    .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime())

  return posts
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || '',
    readingTime: readingTime(content).text,
    tags: data.tags || [],
    coverImage: data.coverImage || undefined
  }
} 