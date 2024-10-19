import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp