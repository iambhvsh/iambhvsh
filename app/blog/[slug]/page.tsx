import { getPostBySlug } from '../../../lib/blog'
import { serialize } from 'next-mdx-remote/serialize'
import { formatDate } from '../../../lib/shared'
import MDXContent from '../../components/MDXContent'
import Image from 'next/image'
import { AUTHOR } from '../../../lib/shared'
import VerifiedBadge from '../../components/VerifiedBadge'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const mdxSource = await serialize(post.content)

  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 pb-12">
      {post.coverImage && (
        <div className="aspect-video w-full relative rounded-xl overflow-hidden mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 75vw"
            priority
          />
        </div>
      )}

      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        
        <p className="text-gray-400 text-lg mb-8">{post.excerpt}</p>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src={AUTHOR.image}
                alt={AUTHOR.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <VerifiedBadge className="absolute -right-1 -bottom-1 w-6 h-6" />
            </div>
            <div>
              <div className="font-medium">{AUTHOR.name}</div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="border-t border-zinc-800 pt-8">
          <div className="prose prose-invert max-w-none">
            <MDXContent source={mdxSource} />
          </div>
        </div>
      </article>
    </div>
  )
} 