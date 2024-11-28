'use client'

import { useState } from 'react'

type CopyLinkButtonProps = {
  slug: string
}

export function CopyLinkButton({ slug }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleCopy = async () => {
    const url = `${window.location.origin}/blog/${slug}`
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setShowToast(true)
    setTimeout(() => {
      setCopied(false)
      setShowToast(false)
    }, 2000)
  }

  return (
    <>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/40 hover:bg-zinc-800/60 transition-colors"
        aria-label="Share post"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        <span className="text-sm text-gray-400 hidden sm:inline">
          {copied ? 'Copied!' : 'Share'}
        </span>
      </button>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-0 left-0 right-0 flex justify-center transition-transform duration-200 ease-in-out ${
          showToast ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="mb-6 px-4 py-2 bg-zinc-800 text-gray-200 rounded-lg shadow-lg">
          Link copied to clipboard!
        </div>
      </div>
    </>
  )
} 