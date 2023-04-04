import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import MotionPageWrapper from "@/components/MotionPageWrapper";

export default function Layout({ children, pagina = "" }) {
  const titlePage = `Eichtici Developer | ${pagina}`;
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Navbar />
      <main>
        <MotionPageWrapper>{children}</MotionPageWrapper>
      </main>
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}
