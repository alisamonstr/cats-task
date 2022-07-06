import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp