import { UilTrash, UilEye } from "@iconscout/react-unicons";
import useProfile from "@/hooks/useProfile";

const CurriculumActions = ({ params, row }) => {
  const { handleDeleteCV, handlePreviewCV } = useProfile();
  return (
    <div className="flex gap-2">
      <div
        onClick={() => {
          handlePreviewCV(row);
        }}
      >
        <UilEye className="text-sky-600 cursor-pointer" />
      </div>
      <div
        onClick={() => {
          handleDeleteCV(row);
        }}
      >
        <UilTrash className="text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default CurriculumActions;
