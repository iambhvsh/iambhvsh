'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import Image from 'next/image'

type PWAContextType = {
  showInstallPrompt: () => void
}

const PWAContext = createContext<PWAContextType | null>(null)

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function PWAProvider({ children }: { children: React.ReactNode }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) {
      alert('To install: Click the browser menu (⋮) and select "Install app"')
      return
    }

    await deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  return (
    <PWAContext.Provider value={{ showInstallPrompt: () => setShowPrompt(true) }}>
      {children}
      {showPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-sm bg-zinc-900 rounded-2xl shadow-2xl">
            <div className="relative h-40 bg-gradient-to-br from-blue-500 to-purple-600">
              <Image
                src="https://placehold.co/192x192/000000/FFFFFF/png?text=B"
                alt="App Icon"
                width={80}
                height={80}
                className="absolute -bottom-10 left-6 rounded-2xl shadow-xl"
              />
              <button onClick={() => setShowPrompt(false)} className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white/80 hover:bg-black/30">
                <FiX size={16} />
              </button>
            </div>
            <div className="p-6 pt-14">
              <h3 className="text-lg font-semibold mb-2">Install iambhvsh</h3>
              <p className="text-sm text-gray-400 mb-6">Install this application for a better experience</p>
              <div className="flex gap-3">
                <button onClick={() => setShowPrompt(false)} className="flex-1 px-4 py-2.5 text-sm rounded-lg bg-zinc-800 text-gray-300 hover:bg-zinc-700">
                  Not Now
                </button>
                <button onClick={handleInstall} className="flex-1 px-4 py-2.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 font-medium">
                  Install App
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PWAContext.Provider>
  )
}

export const usePWA = () => {
  const context = useContext(PWAContext)
  if (!context) throw new Error('usePWA must be used within PWAProvider')
  return context
}
