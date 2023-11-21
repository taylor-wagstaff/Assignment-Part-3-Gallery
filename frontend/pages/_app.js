import '@/styles/input.scss'
import Head from 'next/head'

// Search Engine Optimization
// NextJS Head: Optimize MetaData
// https://www.ohmycrawl.com/nextjs/head/

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Treadler</title>
        <meta
          name="description"
          content="New artist-run dealer gallery located in Auckland"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
