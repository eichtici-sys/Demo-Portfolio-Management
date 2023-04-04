import { useEffect } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "./Breadcrumb";
import { formatDate } from "@/helpers/formatDate";
import useProject from "@/hooks/useProject";
import Phases from "./Phases";
import { UilPlus } from "@iconscout/react-unicons";
import Nodata from "./Nodata";
import TableGrid from "./TableGrid";
import DialogFormTechnology from "./DialogFormTechnology";
import DialogFormTask from "./DialogFormTask";
import DialogDeleteTechnology from "./DialogDeleteTechnology";
import { technologiesColumns, taskColumns } from "@/data/dataColumns";
import DialogDeleteTask from "./DialogDeleteTask";
import DialogViewTask from "./DialogViewTask";

const Project = () => {
  const {
    project,
    getProjectById,
    handleDialogTechnology,
    handleDialogTask,
    technologies,
    tasks,
    loadP
  } = useProject();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      getProjectById(id);
    }
  }, [router.isReady, router.query, technologies, tasks, getProjectById, id]);
  const listBreadcrum = [
    {
      id: 1,
      display: "Portfolio: Projects",
      url: "/admin/projects",
    },
    {
      id: 2,
      display: "Details",
      url: `/admin/projects/${id}`,
    },
  ];

  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1">
      <div className="bg-white w-full flex flex-col gap-1 md:gap-4 backdrop-blur-sm px-3 md:px-4 py-2 md:py-5 rounded-lg">
        <div className="md:mb-2 sm:py-3 py-0">
          <Breadcrumb list={listBreadcrum} />
        </div>
        {project && (
          <>
            <div className="w-full md:px-4 md:py-3 flex justify-between items-center">
              <h2 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
                Project Details : {project.name}
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
                  <span className="font-bold">Project Image:</span>
                  <div className="w-full rounded-lg">
                    <img
                      src={project.imageURL}
                      alt="Project image"
                      className="w-full object-cover rounded-lg shadow-md border-2"
                    />
                  </div>
                  <div>
                    <span className="font-semibold block">Name:</span>
                    {project.name}
                  </div>
                  <div>
                    <span className="font-semibold block">Description: </span>
                    {project.description}
                  </div>
                  <div>
                    <span className="font-semibold block">
                      Url Project Deploy:
                    </span>
                    &ldquo;{project.url}&rdquo;
                  </div>
                  <div>
                    <span className="font-semibold block">
                      Url Repository Github:
                    </span>
                    &ldquo;{project.repository}&rdquo;
                  </div>
                  <div>
                    <span className="font-semibold block">Created By: </span>
                    {project?.creator?.userProfile?.name}
                  </div>
                  <div>
                    <span className="font-semibold block">Created At: </span>
                    {formatDate(project.createdAt)}
                  </div>
                  <div>
                    <span className="font-semibold block">Updated At: </span>
                    {formatDate(project.updatedAt)}
                  </div>
                  <div>
                    <span className="font-semibold block">Project phase:</span>
                    {<Phases {...project} row={project} />}
                  </div>
                  <div>
                    <span className="font-semibold block">Project State:</span>
                    <div className="flex p-2">
                      <div
                        className={`border-2 rounded-xl px-2 py-1 text-center text-white ${
                          project.state === "To Begin"
                            ? " bg-amber-500"
                            : project.state === "In progress"
                            ? " bg-indigo-500"
                            : " bg-green-500"
                        }`}
                      >
                        {project.state}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3 flex-1 px-0 lg:px-7 py-3 bg-white rounded-md ">
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="flex md:flex-row flex-col md:gap-0 gap-3 justify-between">
                    <h3 className="text-lg md:text-xl border-b-2 leading-10">
                      Technologies
                    </h3>
                    <div
                      className="flex gap-2 w-fit  bg-primary2 rounded-lg py-2 px-4 cursor-pointer hover:bg-primary1 hover:text-white"
                      onClick={handleDialogTechnology}
                    >
                      <UilPlus />
                      <span className="font-semibold">Add Technology</span>
                    </div>
                  </div>

                  <div className="pt-4">                    
                    {project?.technologies?.length ? (
                      <TableGrid
                        rows={project?.technologies}
                        columns={technologiesColumns}
                      />
                    ) : (
                      <Nodata
                        text={
                          "There are no data. Add the technology you used in this project "
                        }
                      />
                    )}
                  </div>
                  <div className="flex md:flex-row flex-col md:gap-0 gap-3 justify-between">
                    <h3 className="text-lg md:text-xl border-b-2 leading-10">
                      Tasks
                    </h3>
                    <div
                      className="flex gap-2 w-fit  bg-primary2 rounded-lg py-2 px-4 cursor-pointer hover:bg-primary1 hover:text-white"
                      onClick={handleDialogTask}
                    >
                      <UilPlus />
                      <span className="font-semibold">Add Task</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    {project?.tasks?.length ? (
                      <TableGrid rows={project?.tasks} columns={taskColumns} />
                    ) : (
                      <Nodata text={"There are no data. Add a task now "} />
                    )}
                  </div>
                </div>
              </div>
              <DialogFormTechnology />
              <DialogFormTask />
              <DialogDeleteTechnology />
              <DialogViewTask />
              <DialogDeleteTask />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
