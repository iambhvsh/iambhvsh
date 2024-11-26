import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../../lib/blog'
import { formatDate } from '../../lib/shared'
import { AUTHOR } from '../../lib/shared'
import VerifiedBadge from '../components/VerifiedBadge'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 pb-12">
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-3">Blog</h1>
        <p className="text-gray-400 text-lg">
          Thoughts and insights about web development.
        </p>
      </div>

      <div className="divide-y divide-zinc-800">
        {posts.map((post) => (
          <article key={post.slug} className="group py-8 first:pt-0 last:pb-0">
            <Link href={`/blog/${post.slug}`}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src={AUTHOR.image}
                      alt={AUTHOR.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <VerifiedBadge className="absolute -right-0.5 -bottom-0.5 w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="font-medium text-white">{AUTHOR.name}</span>
                    <span>·</span>
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
                </div>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-sm text-gray-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 