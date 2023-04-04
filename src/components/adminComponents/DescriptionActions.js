import { UilTrash, UilEdit } from "@iconscout/react-unicons";
import useService from "@/hooks/useService";

const DescriptionActions = ({ params, row }) => {
  const {handleEditDescription, handleDeleteDescription } = useService()
  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handleEditDescription(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteDescription(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default DescriptionActions
