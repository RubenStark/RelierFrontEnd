import Lateral from '../components/Lateral/lateral'
import MyNavbar from '../components/navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyNavbar />
      <div className="my-5"></div>
      <Lateral />

      <Component {...pageProps} />
    </>
  )
}
