import Lateral from '../components/Lateral/lateral'
import MyNavbar from '../components/navbar'
import BottomBar from '../components/bottomBar'

import {useRouter} from 'next/router';

import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  if (router.pathname === "/login" || router.pathname === "/messages" ) {
    return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  }

  return (
    <NextUIProvider>
      <MyNavbar />
      <div className="my-5"></div>
      <Lateral />
      <Component {...pageProps} />
      <BottomBar />
    </NextUIProvider>
  )
}
