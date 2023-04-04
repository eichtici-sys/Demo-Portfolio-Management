import React from "react";

const Phases = ({ row }) => {
  return (
    <div className="flex p-2">
      {(() => {
        switch (row.phase) {
          case "Initiation":
            return (
              <div className="border-2 rounded-xl px-2 py-1 text-center text-white bg-amber-500">
                {row.phase}
              </div>
            );
          case "Briefing":
            return (
              <div className="border-2 rounded-xl px-2 py-1 text-center text-white bg-indigo-500">
                {" "}
                {row.phase}
              </div>
            );
          case "Planning":
            return (
              <div className="border-2 rounded-xl px-2 py-1 text-center text-white bg-green-500">
                {" "}
                {row.phase}
              </div>
            );
          case "Design":
            return (
              <div className="border-2 rounded-xl px-2 py-1 text-center text-white bg-blue-500">
                {" "}
                {row.phase}
              </div>
            );
          case "Development":
            return (
              <div className="border-2 rounded-xl px-2 py-1 text-center text-white bg-violet-500">
                {" "}
                {row.phase}
              </div>
            );
          case "Testing":
            return (
              <div className="border-2 rounded-xl px-2 py-1 text-center text-white bg-pink-500">
                {" "}
                {row.phase}
              </div>
            );
          case "Deployment":
            return (
              <div className="border-2 rounded-xl px-2 py-1 text-center text-white bg-slate-500">
                {" "}
                {row.phase}
              </div>
            );
          case "Closed":
            return (
              <div className="border-2 rounded-xl px-2 py-1 text-center text-white bg-darkText">
                {" "}
                {row.phase}
              </div>
            );
        }
      })()}
    </div>
  );
};

export default Phases;
