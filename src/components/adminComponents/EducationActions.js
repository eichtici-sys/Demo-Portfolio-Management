import { UilTrash, UilEdit } from "@iconscout/react-unicons";
import useQualification from "@/hooks/useQualification";

const EducationActions = ({ params, row }) => {
  const { handleEditEducation, handleDeleteEducation } = useQualification();
  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handleEditEducation(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteEducation(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default EducationActions;
