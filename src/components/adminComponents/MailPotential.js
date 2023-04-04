import useProfile from "@/hooks/useProfile";
const MailPotential = ({ row }) => {
  const { changePotential } = useProfile();
  return (
    <div className="flex p-2">
      <div
        className={`border-2 cursor-pointer rounded-xl px-2 py-1 w-[100px] text-center text-white ${
          row.potential ? " bg-emerald-600" : "bg-slate-600"
        }`}
        onClick={() => {
          changePotential(row._id);
        }}
      >
        {row.potential ? "Potential" : "No Potential"}
      </div>
    </div>
  );
};

export default MailPotential;
