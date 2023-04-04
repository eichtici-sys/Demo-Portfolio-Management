import LayoutAdmin from "@/layout/LayoutAdmin";
import ServiceId from "@/components/adminComponents/ServiceId";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
export default function WorkId() {
  return (
    <>
      <LayoutAdmin pagina={"View Service"}>
        <ServiceId />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
}
