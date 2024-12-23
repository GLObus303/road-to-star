// pages/_app.tsx
import type { AppProps } from "next/app";

import { UserContextProvider } from "../context/UserContextProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
