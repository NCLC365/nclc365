import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Smooth scrolling for a better user experience
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
