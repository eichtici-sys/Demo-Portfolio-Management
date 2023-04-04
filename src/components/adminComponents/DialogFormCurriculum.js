import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useProfile from "@/hooks/useProfile";
import { useRouter } from "next/router";
import { UilPaperclip } from "@iconscout/react-unicons";
import toast from "react-hot-toast";

const DialogFormCurriculum = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dataPreview, setDataPreview] = useState("");
  const [infoFile, setInfoFile] = useState("");

  const typeFile = ["application/pdf"];

  const {
    dialogFormCurriculum,
    handleDialogCV,
    createCV,
    nameFileCV,
    setNameFileCV,
  } = useProfile();
  const router = useRouter();

  const onSelectFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      setNameFileCV(selectedFile.name);
    }
    if (selectedFile && typeFile.includes(selectedFile.type)) {
      setInfoFile(selectedFile);
      let reader = new window.FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        setDataPreview(e.target.result);
      };
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if ([name, description].includes("")) {
      toast.error("All fields are required");
      return;
    }
    if (infoFile.type !== "application/pdf") {
      toast.error("The file to upload must be a pdf");

      return;
    }

    await createCV({
      name,
      description,
      dataPreview,
      infoFile,
    });
    setName("");
    setDescription("");
    setInfoFile("");
  };

  return (
    <Transition.Root show={dialogFormCurriculum} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-40 inset-0 overflow-y-auto"
        onClose={handleDialogCV}
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-transparent shadow-none rounded-md text-gray-400 hover:text-gray-500 outline-none "
                  onClick={handleDialogCV}
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
                <div className="mt-3 sm:mt-0 w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-bold text-gray-900 mb-2 text-center md:text-left"
                  >
                    Add Curriculum
                  </Dialog.Title>

                  <form className="mt-6 mb-4" onSubmit={handlesubmit}>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="mb-5">
                        <label
                          htmlFor="name"
                          className=" text-base text-darkText"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                          placeholder="Enter name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-5 relative">
                        <label
                          htmlFor="Image"
                          className=" text-base text-darkText"
                        >
                          Select File
                        </label>
                        <div className="relative w-full h-[41px] px-3 border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 bg-gray-100 flex items-center">
                          <UilPaperclip className="cursor-pointer w-5 h-5" />
                          <input
                            type="file"
                            id="Image"
                            name="Image"
                            className="opacity-0 top-0 left-0 absolute w-full h-[41.6px] px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md valid:bg-gray-100 cursor-pointer"
                            onChange={onSelectFile}
                          />
                          <div className="block px-4 cursor-pointer w-full">
                            <div className="text-xs cursor-pointer font-light">
                              {nameFileCV !== "" ? (
                                <span className="text-green-500">
                                  nameFileCV
                                </span>
                              ) : (
                                "Choose File PDF"
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="description"
                        className=" text-base text-darkText"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                        placeholder="Enter name"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>

                    <input
                      type="submit"
                      value="Add CV"
                      className="bg-gradient-to-r from-primary1 to-primary2 w-full py-2 px-6 rounded-lg text-white uppercase cursor-pointer hover:to-primary1 transition-colors mt-4"
                    />
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

export default DialogFormCurriculum;
