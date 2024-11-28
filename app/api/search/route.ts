import { NextResponse } from 'next/server'
import { PROJECTS } from '../../../lib/projects'
import { SITE_DATA } from '../../../lib/shared'
import { getAllPosts, type BlogPost } from '../../../lib/blog'

export async function GET() {
  try {
    // Convert pages to search results
    const pageResults = SITE_DATA.pages.map(page => ({
      id: `page-${page.path}`,
      title: page.name,
      description: page.description,
      type: 'page' as const,
      url: page.path
    }))

    // Convert projects to search results
    const projectResults = PROJECTS.map(project => ({
      id: project.title.toLowerCase().replace(/\s+/g, '-'),
      title: project.title,
      description: project.description,
      tags: project.tags,
      type: 'project' as const,
      url: project.links.live || project.links.github
    }))

    // Convert blog posts to search results
    const blogResults = (await getAllPosts()).map((post: BlogPost) => ({
      id: post.slug,
      title: post.title,
      description: post.excerpt,
      tags: post.tags,
      type: 'blog' as const,
      url: `/blog/${post.slug}`
    }))

    return NextResponse.json({
      results: [...pageResults, ...projectResults, ...blogResults]
    })
  } catch (error) {
    console.error('Error in search API:', error)
    return NextResponse.json({ results: [] })
  }
} 