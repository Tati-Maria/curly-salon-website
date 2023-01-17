import '../styles/globals.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Context from '../context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    <ToastContainer limit={1} />
    <Context>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </Context>
    </>
  )
}
