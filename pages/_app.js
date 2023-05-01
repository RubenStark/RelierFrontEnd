import Lateral from '../components/Lateral/lateral'
import MyNavbar from '../components/navbar'
import BottomBar from '../components/bottomBar'

import { useRouter } from 'next/router';

import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const queryClient = new QueryClient()

  if (router.pathname === "/login" || router.pathname === "/messages" ) {
    return (
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </QueryClientProvider>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <MyNavbar />
        <div className="my-5"></div>
        <Lateral />
        <Component {...pageProps} />
        <BottomBar />
      </NextUIProvider>
    </QueryClientProvider>
  )
}
