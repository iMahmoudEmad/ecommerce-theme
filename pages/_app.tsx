import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
// import dynamic from 'next/dynamic';

// const PwaUpdater = dynamic(() => import(`./PwaUpdater`), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <PwaUpdater /> */}
      <Component {...pageProps} />
    </>
  )
}
