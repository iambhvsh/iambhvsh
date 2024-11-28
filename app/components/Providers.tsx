'use client'

import { PWAProvider } from './PWA'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PWAProvider>
      {children}
    </PWAProvider>
  )
} 