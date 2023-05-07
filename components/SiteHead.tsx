import Head from "next/head";

export const SiteHead = () => {
  const author = "Ecommerce theme";
  const username = "@Ecommerce";

  return (
    <Head>
      <meta name="title" content="Ecommerce theme" />
      <meta name="colorScheme" content="light" />
      <meta name="creator" content={author} />
      <meta name="publisher" content="Vercel" />
      <meta
        name="keywords"
        content="ecommerce, theme, ecommerce nextjs theme"
      />
      <meta name="theme-color" content="#fff" />
      <meta name="generator" content="Nextjs 13.2.4" />

      <meta name="twitter:site" content={username} />
      <meta name="twitter:creator" content={username} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:url" content="https://ecommerce-theme.vercel.app/" />
      <meta property="og:title" content={author} />
      <meta
        property="og:description"
        content="ecommerce, theme, ecommerce nextjs theme"
      />
      <meta property="og:image" content="https://ecommerce-theme.vercel.app/og" />
      <meta property="og:type" content="website" />

      <meta name="apple-mobile-web-app-title" content={author} />
      <link rel="apple-touch-icon" href="/assets/images/mahmoud.jpg" />
      <meta
        name="description"
        content="ecommerce, theme, ecommerce nextjs theme"
      />

      <title>Ecommerce theme</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};
