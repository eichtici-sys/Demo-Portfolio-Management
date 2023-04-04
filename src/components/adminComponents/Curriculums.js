import Breadcrumb from "./Breadcrumb";
import useProfile from "@/hooks/useProfile";
import TableGrid from "./TableGrid";
import Nodata from "./Nodata";
import { curriculumColumns } from "@/data/dataColumns";
import { CvBC } from "@/data/breadcrumbList";
import {
  UilPlus,
  UilClipboardAlt,
  UilAngleDown,
} from "@iconscout/react-unicons";
import Loading from "../Loading";
import DialogFormCurriculum from "./DialogFormCurriculum";
import DialogDeleteCurriculum from "./DialogDeleteCurriculum";

const Curriculums = () => {
  const { handleDialogCV, curriculums, loader } = useProfile();

  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1">
      <div className="w-full rounded-lg flex flex-col backdrop-blur-sm">
        <div className="w-full bg-white py-2 sm:py-3 rounded-lg px-3 sm:px-4">
          <div className="mb-2 sm:py-3 py-0">
            <Breadcrumb list={CvBC} />
          </div>
          <div className="flex md:flex-row md:gap-0 gap-2 flex-col-reverse justify-between w-full mb-1 items-center">
            <h3 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
              Your Curriculums
            </h3>
            <div className="max-h-[42px] flex gap-4 mt-3 md:mt-0">
              <div
                onClick={handleDialogCV}
                className="flex gap-2 bg-primary2 rounded-lg py-2 px-4 cursor-pointer hover:bg-primary1 hover:text-white"
              >
                <UilPlus />
                <span className="font-semibold">Add</span>
              </div>
              <div className="flex gap-2 bg-darkText rounded-lg py-2 px-4 cursor-pointer text-white">
                <UilClipboardAlt />
                <span>Reports</span>
                <UilAngleDown />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 h-1.5 md:h-2 w-44 md:w-52 mb-5"></div>
          {loader ? (
            <div className="h-[300px]">
              <Loading />
            </div>
          ) : (
            <>
              {curriculums?.length ? (
                <TableGrid rows={curriculums} columns={curriculumColumns} />
              ) : (
                <Nodata
                  text={
                    "There are no data yet. Add a new record of your CV and manage it from this panel."
                  }
                />
              )}
            </>
          )}
        </div>

        <DialogFormCurriculum />
        <DialogDeleteCurriculum />
      </div>
    </div>
  );
};

export default Curriculums;
