import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LLM Util - AI-Powered Text Tools</title>
        <meta name="description" content="LLM Util offers a suite of AI-powered text tools including rewriting, summarization, and more. Enhance your writing with our advanced language models." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  )
}

export default MyApp