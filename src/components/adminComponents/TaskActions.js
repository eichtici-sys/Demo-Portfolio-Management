import { UilEye, UilTrash, UilEdit } from "@iconscout/react-unicons";
import useProject from "@/hooks/useProject";

const TaskActions = ({ row }) => {
  const { handleEditTask, handleDeleteTask, handleViewTask } = useProject();
  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handleViewTask(row);
          }}
          className="text-gray-500 cursor-pointer"
        >
          <UilEye />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleEditTask(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteTask(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TaskActions;
