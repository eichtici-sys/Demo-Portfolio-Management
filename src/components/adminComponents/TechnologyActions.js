import { UilTrash, UilEdit } from "@iconscout/react-unicons";
import useProject from "@/hooks/useProject";

const TechnologyActions = ({ params, row }) => {
  const { handleEditTechnology, handleDeleteTechnology } = useProject();
  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handleEditTechnology(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteTechnology(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TechnologyActions;
