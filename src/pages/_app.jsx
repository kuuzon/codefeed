import '@/styles/globals.css'
import Layout from '@/components/layout'
import { Fragment, useEffect } from 'react'
// import Script from 'next/script'
// import { useRouter } from 'next/router'
// import * as ga from '../lib/google-analytics';

function App({ Component, pageProps }) {
  // Allow for Page View Metrics!
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <Fragment>
      {/* <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy='afterInteractive'
        />

      <Script 
        id="google-analytics-script" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App