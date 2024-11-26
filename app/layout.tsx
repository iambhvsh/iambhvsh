"use client";

import { useEffect } from 'react';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Metadata } from 'next';
import { PWAProvider } from './components/PWA';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL('https://iambhvsh.vercel.app'),
    title: {
      default: 'Bhavesh Patil',
      template: '%s | Bhavesh Patil'
    },
    description: 'Frontend Developer focused on building beautiful and functional web applications.',
    openGraph: {
      title: 'Bhavesh Patil',
      description: 'Frontend Developer focused on building beautiful and functional web applications.',
      url: 'https://iambhvsh.vercel.app',
      siteName: 'Bhavesh Patil',
      locale: 'en_US',
      type: 'website',
      images: [{
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Bhavesh Patil'
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bhavesh Patil',
      description: 'Frontend Developer focused on building beautiful and functional web applications.',
      creator: '@iambhvsh',
      images: [{
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Bhavesh Patil'
      }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://iambhvsh.vercel.app',
    },
    icons: {
      icon: 'https://placehold.co/32x32/000000/FFFFFF/png?text=B',
      shortcut: 'https://placehold.co/32x32/000000/FFFFFF/png?text=B',
      apple: 'https://placehold.co/180x180/000000/FFFFFF/png?text=B',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(() => {
        console.log('Service Worker registered successfully.');
      }).catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white min-h-screen flex flex-col`}>
        <PWAProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </PWAProvider>
      </body>
    </html>
  )
}
