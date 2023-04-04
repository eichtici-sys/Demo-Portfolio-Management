import LayoutAdmin from "@/layout/LayoutAdmin";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";
import CVPreview from "@/components/adminComponents/CVPreview";

export default function CurriculumId() {
  return (
    <>
      <LayoutAdmin pagina={"Project"}>
        <CVPreview />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
}
