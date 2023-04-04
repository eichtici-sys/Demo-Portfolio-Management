import TableGrid from "./TableGrid";
import Breadcrumb from "./Breadcrumb";
import Nodata from "./Nodata";
import { mailColumns } from "@/data/dataColumns";
import useProfile from "@/hooks/useProfile";
import { mailBC } from "@/data/breadcrumbList";
import Loading from "../Loading";

const Emails = () => {
  const { mails, loader } = useProfile();

  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1">
      <div className="w-full rounded-lg flex flex-col backdrop-blur-sm">
        <div className="w-full bg-white py-2 sm:py-3 rounded-lg px-3 sm:px-4">
          <div className="mb-2 sm:py-3 py-0">
            <Breadcrumb list={mailBC} />
          </div>

          <div className="flex md:flex-row md:gap-0 gap-2 flex-col-reverse justify-between w-full mb-1 items-center">
            <h3 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
              Your EMails
            </h3>
          </div>
          <div className="bg-gray-500 h-1.5 md:h-2 w-44 md:w-52 mb-5"></div>
          {loader ? (
            <div className="h-[300px]">
              <Loading />
            </div>
          ) : (
            <>
              {mails.length ? (
                <TableGrid rows={mails} columns={mailColumns} />
              ) : (
                <Nodata text={"There are no data yet."} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Emails;
