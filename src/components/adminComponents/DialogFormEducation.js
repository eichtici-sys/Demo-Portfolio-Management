import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useQualification from "@/hooks/useQualification";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const DialogFormEducation = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [startYear, setStartYear] = useState("");
  const [finishYear, setFinishYear] = useState("");

  const {
    dialogEducation,
    handleDialogFormEducation,
    submitEducation,
    education,
  } = useQualification();
  const router = useRouter();

  useEffect(() => {
    if (education?._id) {
      setId(education._id);
      setTitle(education.title);
      setPlace(education.place);
      setStartYear(education.startYear);
      setFinishYear(education.finishYear);
      return;
    }
    setId("");
    setTitle("");
    setPlace("");
    setStartYear("");
    setFinishYear("");
  }, [education]);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if ([title, place, startYear, finishYear].includes("")) {
      toast.error("All fields are required");
      return;
    }
    await submitEducation({ id, title, place, startYear, finishYear });
    setId("");
    setTitle("");
    setPlace("");
    setStartYear("");
    setFinishYear("");
  };

  return (
    <Transition.Root show={dialogEducation} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-40 inset-0 overflow-y-auto"
        onClose={handleDialogFormEducation}
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
                  className="bg-transparent shadow-none rounded-md text-gray-400 hover:text-gray-500 outline-none "
                  onClick={handleDialogFormEducation}
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
                    {id ? "Edit Education" : "Add Education"}
                  </Dialog.Title>

                  <form className="mt-6 mb-4" onSubmit={handlesubmit}>
                    <div className="mb-5">
                      <label
                        htmlFor="title"
                        className=" text-base text-darkText"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="place"
                        className=" text-base text-darkText"
                      >
                        Place
                      </label>
                      <input
                        type="text"
                        id="place"
                        className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                        placeholder="Enter place"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="startYear"
                        className=" text-base text-darkText"
                      >
                        Start Year
                      </label>
                      <input
                        type="text"
                        id="startYear"
                        className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                        placeholder="Enter the year you started studying"
                        value={startYear}
                        onChange={(e) => setStartYear(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="finishtYear"
                        className=" text-base text-darkText"
                      >
                        Finish Year
                      </label>
                      <input
                        type="text"
                        id="finishtYear"
                        className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                        placeholder="Enter the year you started studying"
                        value={finishYear}
                        onChange={(e) => setFinishYear(e.target.value)}
                      />
                    </div>

                    <input
                      type="submit"
                      value={id ? "Save Changes" : "Add Education"}
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

export default DialogFormEducation;
