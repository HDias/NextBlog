import styles from '../styles/globals.scss'
import Menu from '../components/menu'

// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
    return (<div>
      <Menu />
      <Component {...pageProps} />
    </div>)
  }
  
  export default MyApp