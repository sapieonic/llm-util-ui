import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import Head from 'next/head'
import '../styles/globals.css'
import Script from 'next/script'
import { ADSENSE_CONFIG } from '../config/adsense'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LLM Util - AI-Powered Text Tools</title>
        <meta name="description" content="LLM Util offers a suite of AI-powered text tools including rewriting, summarization, and more. Enhance your writing with our advanced language models." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-9716996261393919"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Google AdSense Script */}
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
        async
      />
      
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  )
}

export default MyApp