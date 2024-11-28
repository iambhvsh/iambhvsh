import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

const postsDirectory = path.join(process.cwd(), 'app/blog/posts')

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: MDXRemoteSerializeResult
  readingTime: string
  tags: string[]
  coverImage?: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(async fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const serializedContent = await serialize(content)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || '',
        content: serializedContent,
        readingTime: readingTime(content).text,
        tags: data.tags || [],
        coverImage: data.coverImage || undefined
      }
    }))
    .then(posts => posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(process.cwd(), 'app/blog/posts', `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
    }
  })

  return {
    slug,
    content: mdxSource,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || '',
    readingTime: readingTime(content).text,
    tags: data.tags || [],
    coverImage: data.coverImage || undefined
  }
} 