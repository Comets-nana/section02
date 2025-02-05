import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <h1>글로벌 헤더</h1>
  <Component {...pageProps} /></>;
}
