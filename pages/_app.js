import Lateral from "../components/Lateral/lateral";
import MyNavbar from "../components/navbar";
import BottomBar from "../components/bottomBar";

import "../styles/globals.css";
import "../styles/login.css";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { use, useEffect, useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthContext, FollowingForYouContext } from "../utils/context";
import { isUserLogedApi } from "../api/auth";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const queryClient = new QueryClient();

  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLogedApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refreshCheckLogin]);

  if (!loadUser) return null;

  if (router.pathname === "/login" || router.pathname === "/register" || router.pathname === "/story") {
    return (
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <AuthContext.Provider value={{ user, setUser }}>
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
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {/* App */}
        <AuthContext.Provider value={{ user, setUser }}>
          <FollowingProvider>
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
          </FollowingProvider>
        </AuthContext.Provider>
        {/* App */}
      </NextUIProvider>
    </QueryClientProvider>
  );
}

// TODO : Implementar el contexto de following
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const contextValue = useMemo(() => ({ user, setUser }), [user]);

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

const FollowingProvider = ({ children }) => {
  const [following, setFollowing] = useState(null);

  const contextValue = useMemo(
    () => ({ following, setFollowing }),
    [following]
  );

  return (
    <FollowingForYouContext.Provider value={contextValue}>
      {children}
    </FollowingForYouContext.Provider>
  );
};
