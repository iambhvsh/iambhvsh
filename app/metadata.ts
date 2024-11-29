import { Metadata } from 'next'

type MetadataProps = { 
  params: { 
    title?: string;
    description?: string;
    type?: 'website' | 'article';
    slug?: string;
  } 
}

export function generateMetadata({ params }: MetadataProps): Metadata {
  const title = params.title || 'Bhavesh Patil';
  const description = params.description || 'Frontend Developer focused on building beautiful and functional web applications.';
  const type = params.type || 'website';

  return {
    metadataBase: new URL('https://iambhvsh.vercel.app'),
    title: {
      default: title,
      template: `%s | Bhavesh Patil`
    },
    description,
    openGraph: {
      title,
      description,
      url: `https://iambhvsh.vercel.app/${params.slug || ''}`,
      siteName: 'Bhavesh Patil',
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
} 