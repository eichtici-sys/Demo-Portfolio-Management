import { UilTrash, UilEdit } from "@iconscout/react-unicons";
import useProfile from "@/hooks/useProfile";

const SocialActions = ({ params, row }) => {
  const { handleEditSocial, handleDeleteSocial } = useProfile();
  return (
    <div className="flex items-center gap-2">
      <div>
        <div
          onClick={() => {
            handleEditSocial(row);
          }}
        >
          <UilEdit className="text-sky-600 cursor-pointer" />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleDeleteSocial(row);
          }}
        >
          <UilTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SocialActions;
