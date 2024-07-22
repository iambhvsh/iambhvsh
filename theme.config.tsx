import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const useNextSeoProps = () => {
  return {
    titleTemplate: '%s'
  };
};

const config: DocsThemeConfig = {
  logo: <img src="/favicon-32x32.png" height="30" width="30" style="border-radius: 100px;"></img>,
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
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

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
        <meta property="og:image" content="https://iambhvsh.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title || 'iambhvsh'} />
        <meta name="twitter:description" content={frontMatter.description || 'Personal website and more by Bhavesh Patil'} />
        <meta name="twitter:image" content="https://iambhvsh.vercel.app/og-image.png" />
      </>
    );
  },
};

export default config;
