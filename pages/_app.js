import "../styles/globals.css";
import "fontsource-noto-serif/latin.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../api/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="py-8 font-serif antialiased border-t-8 border-brand md:py-16">
      <div className="mx-4 md:mx-auto md:max-w-3xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
