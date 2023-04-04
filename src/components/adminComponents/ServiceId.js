import { useEffect } from "react";
import { useRouter } from "next/router";
import TableGrid from "./TableGrid";
import Breadcrumb from "./Breadcrumb";
import Nodata from "./Nodata";
import DialogFormDescriptions from "./DialogFormDescriptions";
import DialogDeleteDescription from "./DialogDeleteDescription";
import useService from "@/hooks/useService";
import { formatDate } from "@/helpers/formatDate";
import { UilPlus } from "@iconscout/react-unicons";
import { descriptionColumns } from "@/data/dataColumns";
import toast from "react-hot-toast";

const ServiceId = () => {
  const { service, getServiceById, descServices, handleDialogDescriptions } =
    useService();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      getServiceById(id);
    }
  }, [router.isReady, router.query, descServices, getServiceById, id]);

  const listBreadcrum = [
    {
      id: 1,
      display: "Works: Services",
      url: "/admin/works",
    },
    {
      id: 2,
      display: "Details",
      url: `/admin/works/${id}`,
    },
  ];

  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1">
      <div className="bg-white w-full flex flex-col gap-1 md:gap-4 backdrop-blur-sm px-3 md:px-4 py-2 md:py-5 rounded-lg">
        <div className="md:mb-2 sm:py-3 py-0">
          <Breadcrumb list={listBreadcrum} />
        </div>
        <div className="w-full md:px-4 md:py-3 flex justify-between items-center">
          <h2 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
            Service Details : {service.title}
          </h2>
        </div>
        <div className="w-full md:px-4 px-1 md:pb-4">
          <div className="bg-gray-500 h-1.5 md:h-2 w-44 md:w-52 mb-5"></div>
        </div>

        <div className="flex lg:flex-row flex-col gap-2 md:gap-4 px-0 md:px-4">
          <div className="w-full lg:w-1/3 px-3 md:px-7 py-3 border-4 border-primary1 rounded-xl">
            <h3 className="text-lg md:text-xl border-b-4 border-b-primary1 leading-10">
              General Data
            </h3>
            <div className="pt-5 pb-3 flex flex-col gap-3">
              <p>
                <span className="font-semibold block">Name:</span>
                {service.name}
              </p>
              <p>
                <span className="font-semibold block">Description: </span>
                {service.description}
              </p>
              <p>
                <span className="font-semibold block">Icon: </span> &ldquo;
                {service.icon}&rdquo;
              </p>
              <p>
                <span className="font-semibold block">Created By: </span>
                {service?.user?.userProfile?.name}
              </p>
              <p>
                <span className="font-semibold block">Created At: </span>{" "}
                {formatDate(service.createdAt)}
              </p>
              <p>
                <span className="font-semibold block">Updated At: </span>{" "}
                {formatDate(service.updatedAt)}
              </p>
            </div>
          </div>
          <div className="flex-1 px-0 lg:px-7 py-3 bg-white rounded-md">
            <div className="flex md:flex-row flex-col md:gap-0 gap-3 justify-between">
              <h3 className="text-lg md:text-xl border-b-2 leading-10">
                Description Service
              </h3>
              <div
                className="flex gap-2 w-fit  bg-primary2 rounded-lg py-2 px-4 cursor-pointer hover:bg-primary1 hover:text-white"
                onClick={handleDialogDescriptions}
              >
                <UilPlus />
                <span className="font-semibold">Add</span>
              </div>
            </div>

            <div className="pt-4">
              {service.servicesDescriptions?.length ? (
                <TableGrid
                  rows={service.servicesDescriptions}
                  columns={descriptionColumns}
                />
              ) : (
                <Nodata
                  text={
                    "There are no data. Add a description Service to see it here"
                  }
                />
              )}
            </div>
          </div>
          <DialogFormDescriptions />
          <DialogDeleteDescription />
        </div>
      </div>
    </div>
  );
};

export default ServiceId;
