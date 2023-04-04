import { UilEye, UilTrash, UilEdit } from "@iconscout/react-unicons";
import useProfile from "@/hooks/useProfile";
import Link from "next/link";

const LevelActions = ({ params, row }) => {
  const { handleEditLevel, handleDeleteLevel, handlePreviewLevel } =
    useProfile();

  return (
    <div className="flex items-center gap-2">
      <div>
        <Link
          href={`/admin/skills/${row._id}`}
          onClick={() => {
            handlePreviewLevel(row);
          }}
          className="text-gray-500 cursor-pointer"
        >
          <UilEye />
        </Link>
      </div>
      <div>
        <div
          onClick={() => {
            handleEditLevel(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteLevel(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LevelActions;
