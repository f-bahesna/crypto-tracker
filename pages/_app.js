import '../styles/globals.css'
import '../styles/nprogress.css'
import dynamic from 'next/dynamic'
import BottomNav from '../components/BottomNav'

const TopProgressBar = dynamic(() => {
    return import("../components/TopProgressBar");
  },
  {ssr: false},
)

function MyApp({ Component, pageProps }) {
  return <>
    <TopProgressBar />
    <Component {...pageProps} />
    <BottomNav/>
   </>
}

export default MyApp
