import Information from "@/components/adminComponents/Information";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
import LayoutAdmin from "@/layout/LayoutAdmin";
const information = () => {
  return (
    <>
        <LayoutAdmin pagina={"Information"}>
          <Information />
          <FooterAdmin />
        </LayoutAdmin>      
    </>
  );
};

export default information;
