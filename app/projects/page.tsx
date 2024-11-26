import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { PROJECTS } from '../../lib/projects'

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-12">
      <div className="mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Projects
        </h1>
        <p className="text-lg text-gray-400/80 max-w-2xl">
          A showcase of my web development journey, featuring modern and responsive applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.title}
            className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="aspect-[16/9] relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-zinc-950/50 to-zinc-950/0" />
              
              {/* Project Links */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Link 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-black/50 backdrop-blur text-zinc-400 hover:text-white hover:bg-black/70 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </Link>
                {project.links.live && (
                  <Link 
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/50 backdrop-blur text-zinc-400 hover:text-white hover:bg-black/70 transition-all"
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 space-y-4 bg-[#050505]">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400/80 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-[#0a0a0a] text-zinc-400 border border-zinc-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

