import { UilTrash, UilEdit } from "@iconscout/react-unicons";
import useQualification from "@/hooks/useQualification";

const ExperienceActions = ({ params, row }) => {
  const { handleEditExperience, handleDeleteExperience } = useQualification();
  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handleEditExperience(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteExperience(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceActions;
