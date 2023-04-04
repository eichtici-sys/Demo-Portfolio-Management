import Head from "next/head";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function AuthLayout({ children, pagina = "" }) {
  const titlePage = `Eichtici Developer | ${pagina}`;
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="bg-gradient-to-r from-primary1 to-primary2">
        <main className=" xm:max-w-xl md:max-w-4xl w-full sm:m-auto h-screen flex md:items-center items-start pt-14 xm:pt-6 justify-center md:px-10 px-3">
          <div className="w-full md:max-w-xl md:m-auto bg-white pt-8 pb-8 px-12 rounded-2xl shadow-boxSidebar">
            <Image
              src="/logotipo-eichtici.svg"
              alt="imagen logotipo"
              width={160}
              height={160}
              className="md:max-w-xs max-w-[110px] w-full mx-auto md:w-[160px] mb-10"
              priority={true}
            />
            {children}
          </div>
        </main>
        <Toaster position="top-right" />
      </div>
    </>
  );
}
