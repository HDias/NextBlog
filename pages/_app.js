import styles from '../styles/globals.scss'
import Header from '../components/header'
import Footer from '../components/footer'

// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
    return (<div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>)
  }
  
  export default MyApp