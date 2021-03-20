import React from 'react'
import '../styles/globals.scss'
import initAuth from '../lib/initAuth'
import Header from '../components/header'
import Footer from '../components/footer'

initAuth()

// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
  return (<div>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>)
}

export default MyApp