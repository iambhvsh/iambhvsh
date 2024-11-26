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

export function generateMetadata({ params }): Metadata {
  const pageTitle = params.title || 'Bhavesh Patil';
  const pageType = params.type || 'website';

  return {
    metadataBase: new URL('https://iambhvsh.vercel.app'),
    title: {
      default: pageTitle,
      template: `%s | Bhavesh Patil`
    },
    description: 'Frontend Developer focused on building beautiful and functional web applications.',
    openGraph: {
      title: pageTitle,
      description: 'Frontend Developer focused on building beautiful and functional web applications.',
      url: `https://iambhvsh.vercel.app/${params.slug || ''}`,
      siteName: 'Bhavesh Patil',
      locale: 'en_US',
      type: pageType,
      images: [{
        url: `/api/og?title=${encodeURIComponent(pageTitle)}&type=${pageType}`,
        width: 1200,
        height: 630,
        alt: pageTitle
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: 'Frontend Developer focused on building beautiful and functional web applications.',
      creator: '@iambhvsh',
      images: [{
        url: `/api/og?title=${encodeURIComponent(pageTitle)}&type=${pageType}`,
        width: 1200,
        height: 630,
        alt: pageTitle
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
      canonical: `https://iambhvsh.vercel.app/${params.slug || ''}`,
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
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white min-h-screen flex flex-col`}>
        <PWAProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </PWAProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/service-worker.js').then(() => {
                  console.log('Service Worker registered successfully.');
                }).catch((error) => {
                  console.error('Service Worker registration failed:', error);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
