import useProject from "@/hooks/useProject";

const TaskState = ({ row }) => {
  const { changeState } = useProject();
  return (
    <div className="flex p-2">
      <div
        className={`border-2 cursor-pointer rounded-xl px-2 py-1 w-[100px] text-center text-white ${
          row.state ? " bg-emerald-600" : "bg-slate-600"
        }`}
        onClick={() => {
          changeState(row._id);
        }}
      >
        {row.state ? "Completed" : "Incomplete"}
      </div>
    </div>
  );
};

export default TaskState;
