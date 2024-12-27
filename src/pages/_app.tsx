import type { AppType } from "next/app";

import { UserContextProvider } from "../context/UserContextProvider";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => (
  <UserContextProvider>
    <Component {...pageProps} />
  </UserContextProvider>
);
export default MyApp;
