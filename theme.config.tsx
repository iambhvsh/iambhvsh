import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import Image from 'next/image';

const useNextSeoProps = () => {
  return {
    titleTemplate: '%s'
  };
};

const config: DocsThemeConfig = {
  logo: (
    <Image 
      src="/logo.png" 
      height={30} 
      width={30} 
      style={{ borderRadius: '50%' }} 
      alt="Logo"
    />
  ),
  project: {
    link: 'https://github.com/iambhvsh',
  },
  docsRepositoryBase: 'https://github.com/iambhvsh',
  footer: {
    text: '🤩 Bhavesh Patil',
  },
  useNextSeoProps,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://iambhvsh.vercel.app' +
      (defaultLocale === locale? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'iambhvsh'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Personal website and more by Bhavesh Patil'}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={frontMatter.description || 'Personal website and more by Bhavesh Patil'} />
        <meta name="author" content="Bhavesh Patil" />
        <meta property="og:image" content="https://ogp.dsabyte.com/api/image.png?layoutName=Simple&Text=Bhavesh+Patil&left=tomato&right=deeppink&ext=.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title || 'iambhvsh'} />
        <meta name="twitter:description" content={frontMatter.description || 'Personal website and more by Bhavesh Patil'} />
        <meta name="twitter:image" content="https://ogp.dsabyte.com/api/image.png?layoutName=Simple&Text=Bhavesh+Patil&left=tomato&right=deeppink&ext=.png" />
        <meta name="google-site-verification" content="UkG6otmqZFb_kB50fQvIFqrqZGYNm00YpfKG9B_aGTY" />
      </>
    );
  },
  primaryHue: {
    light: 255, // White
    dark: 0, // Pure Black
  },
};

export default config;
