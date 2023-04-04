import Project from "@/components/adminComponents/Project";
import LayoutAdmin from "@/layout/LayoutAdmin";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";

export default function ProjectId() {
  return (
    <>
      <LayoutAdmin pagina={"Project"}>
        <Project />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
}
