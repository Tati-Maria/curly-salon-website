import '../styles/globals.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Context from '../context/Context';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Context>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </Context>
    </>
  )
}
