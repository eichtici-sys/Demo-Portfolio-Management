import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useProject from "@/hooks/useProject";
import { UilPaperclip } from "@iconscout/react-unicons";
import toast from "react-hot-toast";

const STATES = ["To Begin", "In progress", "Completed"];
const PHASES = [
  "Initiation",
  "Briefing",
  "Planning",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Closed",
];
const PRIORITY = ["High", "Normal", "Low"];
const FEATURED = ["Featured", "No Featured"];
const DialogFormProject = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [repository, setRepository] = useState("");
  const [state, setState] = useState("");
  const [phase, setPhase] = useState("");
  const [priority, setPriority] = useState("");
  const [featured, setFeatured] = useState("");
  const [preview, setPreview] = useState("");
  const [infoImage, setInfoImage] = useState("");

  const { dialogFormProject, handleDialogProject, submitProject, project } =
    useProject();

  useEffect(() => {
    if (project?._id) {
      setId(project._id);
      setName(project.name);
      setDescription(project.description);
      setUrl(project.url);
      setState(project.state);
      setPhase(project.phase);
      setPriority(project.priority);
      setFeatured(project.featured);
      setImageUrl(project.imageURL);
      setPreview(project.imageURL);
      setRepository(project.repository);
      return;
    }
    setId("");
    setName("");
    setDescription("");
    setUrl("");
    setImageUrl("");
    setRepository("");
    setState("");
    setPhase("");
    setPriority("");
    setFeatured("");
    setPreview(undefined);
    setInfoImage("");
  }, [project]);

  const onSelectFile = (e) => {
    let selectFile = e.target.files[0];
    if (selectFile) {
      setInfoImage(selectFile);
    }
  };

  useEffect(() => {
    if (!infoImage) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(infoImage);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [infoImage]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if ([name, description, url, repository, state].includes("")) {
      toast.error("All fields are required");
      return;
    }
    if (id === "") {
      if (!infoImage) {
        toast.error("Image is required");
        return;
      }
      await submitProject({
        id,
        name,
        description,
        url,
        repository,
        state,
        phase,
        priority,
        featured,
        infoImage,
      });
    } else {
      await submitProject({
        id,
        name,
        description,
        url,
        repository,
        state,
        phase,
        priority,
        featured,
        infoImage,
      });
    }

    setId("");
    setName("");
    setDescription("");
    setUrl("");
    setImageUrl("");
    setRepository("");
    setState("");
    setPhase("");
    setPriority("");
    setFeatured("");
    setInfoImage("");
    setPreview(undefined);
  };

  return (
    <Transition.Root show={dialogFormProject} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-40 inset-0 overflow-y-auto"
        onClose={handleDialogProject}
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
                  onClick={handleDialogProject}
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
                    {id ? "Edit Project" : "Add Project"}
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
                          Select Project Image
                        </label>
                        <div className="relative w-full h-[41px] px-3 border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 bg-gray-100 flex items-center">
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
                              Choose Image JPG, GIF or PNG. Max Size 800k
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {preview && (
                      <div className="flex py-2 justify-center items-center border-2 max-w-[310px] rounded-md mb-3 relative select-none mx-auto px-2 bg-slate-300">
                        <img
                          src={preview}
                          alt="Image preview profile"
                          className="rounded-md"
                        />
                        <span className=" text-white px-2 py-1 rounded-md absolute top-1/2 left-1/2 translate-x-[-50%] select-none translate-y-[-50%] bg-[rgba(0,0,0,.6)]">
                          Preview Image
                        </span>
                      </div>
                    )}

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
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="mb-5">
                        <label
                          htmlFor="url"
                          className=" text-base text-darkText"
                        >
                          Url
                        </label>
                        <input
                          type="text"
                          id="url"
                          className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                          placeholder="Enter name"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="featured"
                          className=" text-base text-darkText"
                        >
                          Featured
                        </label>
                        <select
                          id="featured"
                          className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                          value={featured}
                          onChange={(e) => setFeatured(e.target.value)}
                        >
                          <option value={""}> -- Select -- </option>
                          {FEATURED.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="mb-5">
                        <label
                          htmlFor="repository"
                          className=" text-base text-darkText"
                        >
                          Repository
                        </label>
                        <input
                          type="text"
                          id="repository"
                          className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                          placeholder="Enter repository"
                          value={repository}
                          onChange={(e) => setRepository(e.target.value)}
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="phase"
                          className=" text-base text-darkText"
                        >
                          Phase
                        </label>
                        <select
                          id="phase"
                          className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                          placeholder="Enter repository"
                          value={phase}
                          onChange={(e) => setPhase(e.target.value)}
                        >
                          <option value={""}> -- Select -- </option>
                          {PHASES.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="mb-5">
                        <label
                          htmlFor="state"
                          className=" text-base text-darkText"
                        >
                          State
                        </label>
                        <select
                          id="state"
                          className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                          placeholder="Enter repository"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        >
                          <option value={""}> -- Select -- </option>
                          {STATES.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="priority"
                          className=" text-base text-darkText"
                        >
                          Priority
                        </label>
                        <select
                          id="priority"
                          className="w-full py-2 px-3 text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                          placeholder="Enter repository"
                          value={priority}
                          onChange={(e) => setPriority(e.target.value)}
                        >
                          <option value={""}> -- Select -- </option>
                          {PRIORITY.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <input
                      type="submit"
                      value={id ? "Save Changes" : "Add Project"}
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

export default DialogFormProject;
