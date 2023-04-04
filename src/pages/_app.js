import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthProvider";
import { PortfolioProvider } from "@/context/PortfolioProvider";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PortfolioProvider>
        <Component {...pageProps} />
      </PortfolioProvider>
    </AuthProvider>
  );
}
