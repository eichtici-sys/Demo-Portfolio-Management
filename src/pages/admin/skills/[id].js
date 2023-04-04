import SkillId from "@/components/adminComponents/SkillId";
import LayoutAdmin from "@/layout/LayoutAdmin";
import FooterAdmin from "@/components/adminComponents/FooterAdmin";

export default function LevelId() {
  return (
    <>
      <LayoutAdmin pagina={"View Level"}>
        <SkillId />
        <FooterAdmin />
      </LayoutAdmin>
    </>
  );
}
