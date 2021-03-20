import styles from '../styles/globals.scss'
import initAuth from '../lib/initAuth'

initAuth()

// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
    return (<div>
      <Component {...pageProps} />
    </div>)
  }
  
  export default MyApp