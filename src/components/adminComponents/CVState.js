import useProfile from "@/hooks/useProfile";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";

const CVState = ({ row }) => {
  const { changeVisibility } = useProfile();
  return (
    <div className="flex p-2">
      <div
        className={`border-2 cursor-pointer rounded-xl px-2 py-1 w-[100px] text-center gap-2 text-white flex ${
          row.visible ? " bg-emerald-600" : "bg-slate-600"
        }`}
        onClick={() => {
          changeVisibility(row._id);
        }}
      >
        {row.visible ? (
          <UilEye className="w-5 h-5" />
        ) : (
          <UilEyeSlash className="w-5 h-5" />
        )}
        {row.visible ? "Visible" : "Hidden"}
      </div>
    </div>
  );
};

export default CVState;
