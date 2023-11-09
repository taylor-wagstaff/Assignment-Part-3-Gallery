import '@/styles/input.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Treadler</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
