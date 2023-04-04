import {
  UilBracketsCurly,
  UilAngleDown,
  UilServers,
  UilSwatchbook,
  UilDatabase,
  UilFileCheck,
  UilFileCheckAlt,
} from "@iconscout/react-unicons";
import { useState } from "react";

let w;

const Skill = ({ title, icon, span, array }) => {
  const [showSkills, setShowSkills] = useState(false);
  const [angleAnimation, setAngleAnimation] = useState(false);
  const handleShow = () => {
    setShowSkills(!showSkills);
    setAngleAnimation(!angleAnimation);
  };

  return (
    <>
      <div
        className="flex justify-between items-center cursor-pointer bg-white dark:bg-slate-600 px-5 py-3 xm:py-6 rounded-lg shadow-md"
        onClick={handleShow}
      >
        <div className="flex gap-4 items-center">
          {(() => {
            switch (icon) {
              case "brackets":
                return <UilBracketsCurly className="text-primary1" size={30} />;
              case "server":
                return <UilServers className="text-primary1" size={30} />;
              case "design":
                return <UilSwatchbook className="text-primary1" size={30} />;
              case "database":
                return <UilDatabase className="text-primary1" size={30} />;
              default:
                return <UilFileCheckAlt className="text-primary1" size={30} />;
            }
          })()}
          <div>
            <h3 className="text-[rgba(64 64 64 /1)] dark:text-white">
              {title}
            </h3>
            <span className="text-gray-400 dark:text-[#fafafa] text-xs">
              {span}
            </span>
          </div>
        </div>

        <UilAngleDown
          className={`cursor-pointer duration-700 text-[rgba(64 64 64 /1)] dark:text-white ${
            angleAnimation ? " rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`gap-2 mt-5 overflow-hidden grid grid-cols-2 bg-white dark:bg-slate-600 px-2 py-2 xm:px-4 xm:py-2 rounded-lg shadow-md ${
          showSkills ? " block" : "hidden"
        }`}
      >
        {array.map((tech) => (
          <div key={tech._id} className="flex flex-col mb-3">
            <div className="flex gap-2">
              <UilFileCheck className="text-primary1" />
              <span className="font-bold text-sm xm:text-base text-[rgba(64 64 64 /1)] dark:text-[#f1f1f1]">
                {tech.name}
              </span>{" "}
            </div>
            <div>
              <span className="text-gray-400 font-light text-xs pl-7">
                {tech.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skill;
