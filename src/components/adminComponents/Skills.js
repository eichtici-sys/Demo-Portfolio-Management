import TableGrid from "./TableGrid";
import DialogFormLevel from "./DialogFormLevel";
import DialogDeleteLevel from "./DialogDeleteLevel";
import Breadcrumb from "./Breadcrumb";
import Nodata from "./Nodata";
import {
  UilPlus,
  UilClipboardAlt,
  UilAngleDown,
} from "@iconscout/react-unicons";
import useProfile from "@/hooks/useProfile";
import { levelColumns } from "@/data/dataColumns";
import { skillsBC } from "@/data/breadcrumbList";

const Skills = () => {
  const { handleModalLevel, levels } = useProfile();

  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1">
      <div className="w-full rounded-lg flex flex-col backdrop-blur-sm">
        <div className="w-full bg-white py-2 sm:py-3 rounded-lg px-3 sm:px-4">
          <div className="mb-2 sm:py-3 py-0">
            <Breadcrumb list={skillsBC} />
          </div>

          <div className="flex md:flex-row md:gap-0 gap-2 flex-col-reverse justify-between w-full mb-1 items-center">
            <h3 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
              All Skills
            </h3>
            <div className="max-h-[42px] flex gap-4 mt-3 md:mt-0">
              <div
                onClick={handleModalLevel}
                className="flex gap-2 bg-primary2 rounded-lg py-2 px-4 cursor-pointer hover:bg-primary1 hover:text-white"
              >
                <UilPlus />
                <span className="font-semibold">New</span>
              </div>
              <div className="flex gap-2 bg-darkText rounded-lg py-2 px-4 cursor-pointer text-white">
                <UilClipboardAlt />
                <span>Reports</span>
                <UilAngleDown />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 h-1.5 md:h-2 w-44 md:w-52 mb-5"></div>

          {levels.length ? (
            <TableGrid rows={levels} columns={levelColumns} />
          ) : (
            <Nodata
              text={
                "There are no levels created by this user. Add a level now and you will see here all the levels you create"
              }
            />
          )}
        </div>
        <DialogFormLevel />
        <DialogDeleteLevel />
      </div>
    </div>
  );
};

export default Skills;
