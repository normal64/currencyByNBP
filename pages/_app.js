import '../styles/globals.css'
import Layout from "./components/Layout"
import CurrencyStyles from "../styles/Currency.module.scss";
import InfoapiStyles from "../styles/Infoapi.module.scss"
import DonationStyles from "../styles/Donate.module.scss"
import HeaderStyles from '../../styles/Header.module.scss'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
        <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
