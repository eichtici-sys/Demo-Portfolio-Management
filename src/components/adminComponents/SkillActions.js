import { UilTrash, UilEdit } from "@iconscout/react-unicons";
import useProfile from "@/hooks/useProfile";

const SkillActions = ({ params, row }) => {
  const { handleEditSkill, handleDeleteSkill } = useProfile();

  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handleEditSkill(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteSkill(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SkillActions;
