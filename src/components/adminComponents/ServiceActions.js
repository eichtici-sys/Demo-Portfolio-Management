import { UilEye, UilTrash, UilEdit } from "@iconscout/react-unicons";
import useService from "@/hooks/useService";

const ServiceActions = ({ params, row }) => {
  const { handlePreviewService, handleEditService, handleDeleteService } =
    useService();
  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handlePreviewService(row);
          }}
          className="text-gray-500 cursor-pointer"
        >
          <UilEye />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleEditService(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteService(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ServiceActions;
