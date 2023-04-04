import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useProfile from "@/hooks/useProfile";
import { UilPaperclip, UilExchangeAlt } from "@iconscout/react-unicons";
import toast from "react-hot-toast";

const DialogChangeImgResumen = () => {
  const {
    about,
    dialogChangeImageResumen,
    handleChangeImageResumen,
    changeImageResumen,
  } = useProfile();
  const [id, setId] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [infoImageResumen, setInfoImageResumen] = useState("");
  const [preview, setPreview] = useState("");
  const [nameFile, setNameFile] = useState("");

  useEffect(() => {
    if (Object.entries(about).length === 0) return;
    if (about._id) {
      setId(about._id);
      setImageURL(about.imageResumenURL);
    }
    setInfoImageResumen("");
    setPreview(undefined);
    setNameFile("");
  }, [about]);

  const onSelectFile = (e) => {
    let selectFile = e.target.files[0];
    if (selectFile) {
      setInfoImageResumen(selectFile);
      setNameFile(selectFile.name);
    }
  };

  useEffect(() => {
    if (!infoImageResumen) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(infoImageResumen);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [infoImageResumen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (infoImageResumen.type === "image/gif") {
      toast.error("Image Not supported");
      return;
    }
    await changeImageResumen({ id, infoImageResumen });
    setInfoImageResumen("");
    setPreview(undefined);
    setNameFile("");
    setImageURL("");
  };

  return (
    <Transition.Root show={dialogChangeImageResumen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-40 inset-0 overflow-y-auto"
        onClose={handleChangeImageResumen}
      >
        <div className="flex items-center xm:items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 w-full">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-transparent shadow-none rounded-md text-gray-400 hover:text-gray-500 outline-none"
                  onClick={handleChangeImageResumen}
                >
                  <span className="sr-only">Cerrar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-bold text-gray-900 mb-2 text-center md:text-left"
                  >
                    Change Image Resumen
                  </Dialog.Title>

                  <form onSubmit={handleSubmit}>
                    <div className="px-1 py-4 flex flex-col justify-center">
                      <div className="flex gap-3 xm:flex-row flex-col justify-center items-center">
                        <div className="px-1">
                          <span className="mx-auto">Actual Image:</span>
                          <div className=" w-44 h-44 flex justify-center items-center mx-auto mt-2">
                            <img
                              src={imageURL}
                              width={400}
                              height={400}
                              alt="User photo"
                              className="h-full w-full  object-cover bg-slate-100 rounded-xl"
                            />
                          </div>
                        </div>
                        {preview && (
                          <UilExchangeAlt className="text-primary1 mt-6 h-7 w-7 xm:flex hidden" />
                        )}
                        {preview && (
                          <div className="px-1">
                            <span className="mx-auto">Preview New Image:</span>
                            <div className=" w-44 h-44 flex justify-center items-center mx-auto mt-2">
                              <img
                                src={preview}
                                width={400}
                                height={400}
                                alt="User photo"
                                className="h-full w-full  object-cover bg-slate-100 rounded-xl"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mb-5 relative max-w-[260px] mx-auto mt-8">
                        <label
                          htmlFor="Image"
                          className=" text-base text-darkText flex justify-center"
                        >
                          {nameFile
                            ? `New Image: ${nameFile}`
                            : "Select New Image"}
                        </label>
                        <div className="relative w-full h-[41px] px-3 border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 bg-gray-100 flex items-center cursor-pointer">
                          <UilPaperclip className="cursor-pointer w-5 h-5" />
                          <input
                            type="file"
                            accept="image/*"
                            id="Image"
                            name="Image"
                            className="opacity-0 top-0 left-0 absolute w-full h-[41.6px] px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md valid:bg-gray-100 cursor-pointer"
                            onChange={onSelectFile}
                          />
                          <div className="block px-4 cursor-pointer w-full">
                            <div className="text-xs cursor-pointer font-light">
                              Choose Image JPG or PNG. Max Size 800k
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {preview && (
                      <>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md hover:scale-100 px-4 py-2 bg-slate-600 text-base uppercase text-white hover:bg-slate-700 outline-none"
                          onClick={handleChangeImageResumen}
                        >
                          Cancel
                        </button>
                        <input
                          type="submit"
                          value={"Change Image"}
                          className="bg-gradient-to-r from-primary1 to-primary2 w-full py-2 px-6 rounded-lg text-white uppercase cursor-pointer hover:to-primary1 transition-colors mt-4"
                        />
                      </>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DialogChangeImgResumen;
