import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ConfigProvider, Button, theme as antdTheme } from 'antd'
import Head from 'next/head'
import '../styles/globals.css'
import Script from 'next/script'
import { ADSENSE_CONFIG, IS_ADS_ENABLED } from '../config/adsense'
import { AuthProvider } from '../contexts/AuthContext'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'

function MyApp({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  // Load saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('llm-util-theme')
    if (saved === 'dark' || saved === 'light') {
      setThemeMode(saved)
    }
  }, [])

  const toggleTheme = () => {
    setThemeMode(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('llm-util-theme', next)
      return next
    })
  }

  return (
    <>
      <Head>
        <title>LLM Util - AI-Powered Text Tools</title>
        <meta name="description" content="LLM Util offers a suite of AI-powered text tools including rewriting, summarization, and more. Enhance your writing with our advanced language models." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {IS_ADS_ENABLED && (
          <meta name="google-adsense-account" content="ca-pub-9716996261393919"></meta>
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Google AdSense Script - Only loaded if ads are enabled */}
      {IS_ADS_ENABLED && (
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
          async
        />
      )}
      
      <AuthProvider>
        <ConfigProvider
          theme={{
            algorithm:
              themeMode === 'dark'
                ? antdTheme.darkAlgorithm
                : antdTheme.defaultAlgorithm,
          }}
        >
          <Component {...pageProps} />
          {/* Theme toggle button */}
          <div
            style={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              zIndex: 1000,
            }}
          >
            <Button
              type="primary"
              shape="circle"
              onClick={toggleTheme}
              icon={
                themeMode === 'light' ? <MoonOutlined /> : <SunOutlined />
              }
            />
          </div>
        </ConfigProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
