import Lateral from '../components/Lateral/lateral'
import MyNavbar from '../components/navbar'
import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <MyNavbar />
      <div className="my-5"></div>
      <Lateral />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
