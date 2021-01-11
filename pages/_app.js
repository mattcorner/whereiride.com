import "../styles/globals.css";
import "fontsource-noto-serif/latin.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="py-8 font-serif antialiased border-t-8 border-brand md:py-16">
      <div className="mx-4 md:mx-auto md:max-w-3xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
