import { Metadata } from 'next'

type MetadataProps = { 
  params: { 
    title?: string;
    type?: 'website' | 'article';
    slug?: string;
    description?: string;
  } 
}

export function generateMetadata({ params }: MetadataProps): Metadata {
  const pageTitle = params.title || 'Bhavesh Patil';
  const pageType = params.type || 'website' as const;
  const pageDescription = params.description || 'Frontend Developer focused on building beautiful and functional web applications.';

  // Generate dynamic description based on page type and title
  const description = pageType === 'article' 
    ? `Read ${pageTitle} - An article by Bhavesh Patil about web development and technology.`
    : pageType === 'website' && params.slug
    ? `Explore ${pageTitle} - ${pageDescription}`
    : pageDescription;

  return {
    metadataBase: new URL('https://iambhvsh.vercel.app'),
    title: {
      default: pageTitle,
      template: `%s | Bhavesh Patil`
    },
    description,
    openGraph: {
      title: pageTitle,
      description,
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
      description,
      images: [`/api/og?title=${encodeURIComponent(pageTitle)}&type=${pageType}`],
    },
    // Add other metadata as needed
  }
} 