import { UilEye, UilTrash, UilEdit } from "@iconscout/react-unicons";
import useProject from "@/hooks/useProject";

const ProjectActions = ({ params, row }) => {
  const { handleEditProject, handleDeleteProject, handlePreviewProject } =
    useProject();
  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handlePreviewProject(row);
          }}
          className="text-gray-500 cursor-pointer"
        >
          <UilEye />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleEditProject(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteProject(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProjectActions;
