import useProfile from "@/hooks/useProfile";
import { UilEnvelopeCheck, UilEnvelopeTimes } from "@iconscout/react-unicons";
const MailState = ({ row }) => {
  const { changeState } = useProfile();
  return (
    <div className="flex p-2">
      <div
        className={`border-2 cursor-pointer rounded-xl px-2 py-1 w-[100px] text-center text-slate-500`}
        onClick={() => {
          changeState(row._id);
        }}
      >
        {row.state ? (
          <div className="flex items-center gap-1">
            <UilEnvelopeCheck className="text-sky-500" />
            <span>Read</span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <UilEnvelopeTimes className="text-red-500" />
            <span>Unread</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MailState;
