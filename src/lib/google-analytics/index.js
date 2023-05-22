// C. SETUP OF GA PAGE VIEWS
export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    path_url: url,
  })
}