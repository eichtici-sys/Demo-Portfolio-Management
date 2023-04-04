import Breadcrumb from "./Breadcrumb";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useProfile from "@/hooks/useProfile";
import { UilFileDownload } from "@iconscout/react-unicons";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const CVPreview = () => {
  const router = useRouter();
  const { id } = router.query;
  const { curriculum, downloadCV, getCVById } = useProfile();

  const listBreadcrum = [
    {
      id: 1,
      display: "Profile: CV",
      url: "/admin/curriculum",
    },
    {
      id: 2,
      display: "Preview",
      url: `/admin/curriculum/${id}`,
    },
  ];

  useEffect(() => {
    if (router.isReady) {
      getCVById(id);
    }
  }, [router.isReady, router.query, curriculum, getCVById, id]);

  const newplugin = defaultLayoutPlugin();
  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1">
      <div className="bg-white w-full flex flex-col gap-1 md:gap-4 backdrop-blur-sm px-3 md:px-4 py-2 md:py-5 rounded-lg">
        <div className="md:mb-2 sm:py-3 py-0">
          <Breadcrumb list={listBreadcrum} />
        </div>
        <div className="w-full md:px-4 md:py-3 flex justify-between items-center">
          <h2 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
            Curriculum : {curriculum.name}
          </h2>
          <div
            className="flex gap-2 bg-primary2 rounded-lg py-2 px-4 cursor-pointer hover:bg-primary1 hover:text-white"
            onClick={() => downloadCV(curriculum._id)}
          >
            <UilFileDownload />
            <span className="font-semibold">Download</span>
          </div>
        </div>
        <div className="w-full md:px-4 px-1 md:pb-4">
          <div className="bg-gray-500 h-1.5 md:h-2 w-44 md:w-52 mb-5"></div>
        </div>
        <div className="flex lg:flex-row flex-col gap-2 md:gap-4 px-0 md:px-4">
          <div className="w-full lg:w-5/6 mx-auto h-auto">
            <div className="py-3">{curriculum.description}</div>
            {curriculum.name && (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={curriculum.dataPreview}
                  plugins={[newplugin]}
                />
              </Worker>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
