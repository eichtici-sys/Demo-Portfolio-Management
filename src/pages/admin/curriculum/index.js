import LayoutAdmin from "@/layout/LayoutAdmin";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
import Curriculums from "@/components/adminComponents/Curriculums";

export default function Home() {
  return (
    <>
      <LayoutAdmin pagina={"Curriculum"}>
        <Curriculums />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
};

