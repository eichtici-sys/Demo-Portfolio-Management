import Projects from "@/components/adminComponents/Projects";
import LayoutAdmin from "@/layout/LayoutAdmin";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";

export default function Home() {
  return (
    <>
      <LayoutAdmin pagina={"Projects"}>
        <Projects />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
}
