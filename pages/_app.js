import Lateral from '../components/Lateral/lateral'
import MyNavbar from '../components/navbar'
import BottomBar from '../components/bottomBar'

import '../styles/globals.css'
import '../styles/login.css'
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from 'next/router';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../utils/context' 
import { isUserLogedApi } from '../api/auth'

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState(undefined);
  
  const router = useRouter();
  const queryClient = new QueryClient()


  if (router.pathname === "/login" || router.pathname === "/register") {
    return (
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <AuthContext.Provider value={{user, setUser}}>
          <Component {...pageProps} />
          <ToastContainer 
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover={false}
          />
          </AuthContext.Provider>
        </NextUIProvider>
      </QueryClientProvider>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {/* App */}
        <AuthContext.Provider value={{user, setUser}}>
        <MyNavbar />
        <div className="my-5"></div>
        <Lateral />
        <Component {...pageProps} />
        <BottomBar />
        <ToastContainer 
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover={false}
          />
        </AuthContext.Provider>
        {/* App */}
      </NextUIProvider>
    </QueryClientProvider>
  )
};
