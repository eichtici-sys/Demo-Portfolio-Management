import AdminResumen from "@/components/adminComponents/AdminResumen";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
import LayoutAdmin from "@/layout/LayoutAdmin";

export default function Home() {
  return (
    <LayoutAdmin pagina={"Resumen Panel - Admin"}>
      <AdminResumen />
      <FooterAdmin />
    </LayoutAdmin>
  );
}
