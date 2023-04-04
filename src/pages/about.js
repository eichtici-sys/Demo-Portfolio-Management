import Layout from "@/layout/Layout";
import SkillsSection from "@/components/SkillsSection";
import QualificationSection from "@/components/QualificationSection";
import AboutResumen from "@/components/AboutResumen";

export default function about() {
  return (
    <>
      <Layout pagina={"About"}>
        <AboutResumen />
        <SkillsSection />
        <QualificationSection />
      </Layout>
    </>
  );
}
