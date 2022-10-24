import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >{`ENV: ${process.env.NODE_ENV}`}</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
