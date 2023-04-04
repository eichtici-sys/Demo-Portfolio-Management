import Experiences from "@/components/adminComponents/Experiences";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
import LayoutAdmin from "@/layout/LayoutAdmin";
const experience = () => {
  return (
    <>
      <LayoutAdmin pagina={"Experience"}>
        <Experiences />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
};

export default experience;
