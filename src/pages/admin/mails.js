import Emails from "@/components/adminComponents/Emails";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
import LayoutAdmin from "@/layout/LayoutAdmin";
const mails = () => {
  return (
    <>
      <LayoutAdmin pagina={"Mails"}>
        <Emails />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
};

export default mails;
