import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { ReactNode } from "react";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps & {
  Component: NextPageWithLayout;
}) {
  // const router = useRouter();
  
  // const onClickBtn = () => {
  //   router.push('/test');
  // };

  // useEffect(()=>{
  //   router.prefetch("/test");
  // }, []);

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout> 
  );
  
  // (
  //   <>
  //     <header>
  //       <Link href={"/"}>index</Link> {/*index 페이지로 이동*/}
  //       &nbsp;
  //       <Link href={"/search"} prefetch={false}>search</Link> {/*search 페이지로 이동*/}
  //       &nbsp;
  //       <Link href={"/book/1"}>/book/1</Link> {/*book/1 페이지로 이동*/}
  //       <div>
  //         <button onClick={onClickBtn}>/test 페이지로 이동</button> {/*test 페이지로 이동*/}
  //       </div>
  //     </header>
  //     <Component {...pageProps} />
  //   </>
  // );
}
