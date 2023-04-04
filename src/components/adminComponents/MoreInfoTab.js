import TableGrid from "./TableGrid";
import Nodata from "./Nodata";
import DialogFormSocials from "./DialogFormSocials";
import useProfile from "@/hooks/useProfile";
import {
  UilPlus,
  UilClipboardAlt,
  UilAngleDown,
  UilCameraChange,
} from "@iconscout/react-unicons";
import DialogDeleteSocial from "./DialogDeleteSocial";
import { socialColumns } from "@/data/dataColumns";
import { useEffect, useState } from "react";
import DialogChangeImgPresentation from "./DialogChangeImgPresentation";
import DialogChangeImgAbout from "./DialogChangeImgAbout";
import toast from "react-hot-toast";
import DialogChangeImgResumen from "./DialogChangeImgResumen";
import DialogChangeImgBackground from "./DialogChangeImgBackground";
import Loading from "../Loading";

const MoreInfoTab = ({ tabContent }) => {
  const {
    handleDialogSocials,
    socials,
    about,
    editAboutInfo,
    handleChangeImagePresentation,
    handleChangeImageAbout,
    handleChangeImageResumen,
    handleChangeImageBackground,
    loader,
  } = useProfile();
  const [id, setId] = useState(null);
  const [presentation, setPresentation] = useState("");
  const [aboutDescription, setAboutDescription] = useState("");
  const [aboutResumen, setAboutResumen] = useState("");
  const [presentationImage, setPresentationImage] = useState("");
  const [aboutImage, setAboutImage] = useState("");
  const [aboutResumenImage, setAboutResumenImage] = useState("");
  const [aboutBackground, setAboutBackground] = useState("");

  useEffect(() => {
    if (Object.entries(about).length === 0) return;
    if (about._id) {
      setId(about._id);
      setPresentation(about.presentation);
      setAboutDescription(about.description);
      setAboutResumen(about.resumen);
      setPresentationImage(about.imagePresentationURL);
      setAboutImage(about.imageAboutURL);
      setAboutResumenImage(about.imageResumenURL);
      setAboutBackground(about.imageBG_URL);
    }
  }, [about]);

  const handleSubmitAboutInfo = async (e) => {
    e.preventDefault();
    if ([presentation, aboutDescription, aboutResumen].includes("")) {
      toast.error("All fields are required");
      return;
    }
    await editAboutInfo({ id, presentation, aboutDescription, aboutResumen });
  };

  return (
    <div
      className={`${
        tabContent === 2 ? "block h-auto" : "hidden h-0"
      } md:px-3 px-0 w-full`}
    >
      {tabContent === 2 && (
        <>
          <div
            className={`flex md:flex-row md:gap-0 gap-2 flex-col-reverse justify-between w-full mb-1 items-center`}
          >
            <h3 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
              About Info
            </h3>
          </div>
          <div className="bg-primary1 h-1.5 md:h-2 lg:w-44 md:w-52 mb-5"></div>
          <div className="grid xm:grid-cols-2 grid-cols-1 my-3 border-b-2">
            <div className="px-3 py-3">
              <form onSubmit={handleSubmitAboutInfo}>
                <div className="mb-4">
                  <label
                    htmlFor="presentation"
                    className=" text-sm md:text-base text-darkText"
                  >
                    Presentation
                  </label>
                  <textarea
                    id="presentation"
                    rows={5}
                    className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                    placeholder="Enter your presentation profile"
                    value={presentation}
                    onChange={(e) => setPresentation(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="aboutDescription"
                    className=" text-sm md:text-base text-darkText"
                  >
                    About me
                  </label>
                  <textarea
                    id="aboutDescription"
                    rows={5}
                    className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                    placeholder="Enter your description about you"
                    value={aboutDescription}
                    onChange={(e) => setAboutDescription(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="aboutResumen"
                    className=" text-sm md:text-base text-darkText"
                  >
                    Resumen
                  </label>
                  <textarea
                    id="aboutResumen"
                    rows={5}
                    className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                    placeholder="Enter your presentation profile"
                    value={aboutResumen}
                    onChange={(e) => setAboutResumen(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value={"Save About Info"}
                  className="bg-gradient-to-r from-primary1 to-primary2 w-full mt-2 py-2 px-6 rounded-lg text-white uppercase cursor-pointer hover:to-primary1 transition-colors"
                />
              </form>
            </div>
            <div>
              <div className="flex flex-col xm:flex-row justify-center gap-5 px-6">
                <div>
                  <div className="text-center py-2">Presentation Image</div>
                  <div className="h-52 max-h-52 mb-4">
                    <div className="mx-auto w-52 items-center h-full relative">
                      <img
                        src={presentationImage}
                        width={400}
                        height={400}
                        alt="User photo"
                        className="h-full w-full  object-cover bg-slate-100 rounded-xl"
                      />
                      <div
                        className="bg-white flex justify-center items-center absolute bottom-1 right-1 w-9 h-9 rounded-xl shadow-md cursor-pointer text-gray-400 hover:text-white hover:bg-primary1 transition-all"
                        onClick={() => handleChangeImagePresentation(about)}
                      >
                        <UilCameraChange />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-center py-2">About Image</div>
                  <div className="h-52 max-h-52 mb-4">
                    <div className="mx-auto w-52 items-center h-full relative">
                      <img
                        src={aboutImage}
                        width={400}
                        height={400}
                        alt="User photo"
                        className="h-full w-full  object-cover bg-slate-100 rounded-lg"
                      />
                      <div
                        className="bg-white flex justify-center items-center absolute bottom-1 right-1 w-9 h-9 rounded-xl shadow-md cursor-pointer text-gray-400 hover:text-white hover:bg-primary1 transition-all"
                        onClick={() => handleChangeImageAbout(about)}
                      >
                        <UilCameraChange />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xm:flex-row justify-center gap-5 px-6">
                <div>
                  <div className="text-center py-2">Resumen Image</div>
                  <div className="h-52 max-h-52 mb-4">
                    <div className="mx-auto w-52 items-center h-full relative">
                      <img
                        src={aboutResumenImage}
                        width={400}
                        height={400}
                        alt="User photo"
                        className="h-full w-full  object-cover bg-slate-100 rounded-xl"
                      />
                      <div
                        className="bg-white flex justify-center items-center absolute bottom-1 right-1 w-9 h-9 rounded-xl shadow-md cursor-pointer text-gray-400 hover:text-white hover:bg-primary1 transition-all"
                        onClick={() => handleChangeImageResumen(about)}
                      >
                        <UilCameraChange />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-center py-2">Bakcground Image</div>
                  <div className="h-52 max-h-52 mb-4">
                    <div className="mx-auto w-52 items-center h-full relative">
                      <img
                        src={aboutBackground}
                        width={400}
                        height={400}
                        alt="User photo"
                        className="h-full w-full  object-cover bg-slate-100 rounded-lg"
                      />
                      <div
                        className="bg-white flex justify-center items-center absolute bottom-1 right-1 w-9 h-9 rounded-xl shadow-md cursor-pointer text-gray-400 hover:text-white hover:bg-primary1 transition-all"
                        onClick={() => handleChangeImageBackground(about)}
                      >
                        <UilCameraChange />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex md:flex-row md:gap-0 gap-2 flex-col-reverse justify-between w-full mb-1 items-center`}
          >
            <h3 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
              Social Networks
            </h3>
            <div className="max-h-[42px] flex gap-4 mt-3 md:mt-0">
              <div
                onClick={handleDialogSocials}
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
          <div className="bg-primary1 h-1.5 md:h-2 lg:w-44 md:w-52 mb-5"></div>
          {loader ? (
            <div className="h-[300px]">
              <Loading />
            </div>
          ) : (
            <>
              {socials.length ? (
                <div className="w-full h-auto">
                  <TableGrid rows={socials} columns={socialColumns} />
                </div>
              ) : (
                <Nodata
                  text={
                    "You have no data. Add a social network to be able to see it in this panel."
                  }
                />
              )}
            </>
          )}
        </>
      )}
      <DialogChangeImgPresentation />
      <DialogChangeImgAbout />
      <DialogChangeImgResumen />
      <DialogChangeImgBackground />
      <DialogFormSocials />
      <DialogDeleteSocial />
    </div>
  );
};

export default MoreInfoTab;
