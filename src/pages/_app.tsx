import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  const onClickBtn = () => {
    router.push('/test');
  };

  return (
    <>
      <header>
        <Link href={"/"}>index</Link> {/*index 페이지로 이동*/}
        &nbsp;
        <Link href={"/search"}>search</Link> {/*search 페이지로 이동*/}
        &nbsp;
        <Link href={"/book/1"}>/book/1</Link> {/*book/1 페이지로 이동*/}
        <div>
          <button onClick={onClickBtn}>/test 페이지로 이동</button> {/*test 페이지로 이동*/}
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
