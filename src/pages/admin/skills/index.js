import Skills from "@/components/adminComponents/Skills";
import LayoutAdmin from "@/layout/LayoutAdmin";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";

export default function Home() {
  return (
    <>
      <LayoutAdmin pagina={"Admin"}>
        <Skills />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
}
