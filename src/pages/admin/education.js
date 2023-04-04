import Education from "@/components/adminComponents/Education";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
import LayoutAdmin from "@/layout/LayoutAdmin";
const education = () => {
  return (
    <>
      <LayoutAdmin pagina={"Education"}>
        <Education />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
};

export default education;
