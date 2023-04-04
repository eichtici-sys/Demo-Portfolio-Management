import LayoutAdmin from "@/layout/LayoutAdmin";
import Works from "@/components/adminComponents/Works";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
export default function Home() {
  return (
    <>
      <LayoutAdmin pagina={"Works"}>
        <Works />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
}
