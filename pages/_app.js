/* eslint-disable quotes */
import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

import { Navbar, Footer } from "../components";
import { NFTProvider } from "../context/NFTContext";

const MyApp = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-min">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      <Script
        src="https://kit.fontawesome.com/1d292e90a6.js"
        crossOrigin="anonymous"
      />
    </ThemeProvider>
  </NFTProvider>
);

export default MyApp;
