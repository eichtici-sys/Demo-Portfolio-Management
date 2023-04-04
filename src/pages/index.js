import Layout from "@/layout/Layout";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <>
      <Layout pagina={"Inicio"}>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
      </Layout>
    </>
  );
}
