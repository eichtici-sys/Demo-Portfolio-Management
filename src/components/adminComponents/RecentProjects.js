import { useState, useEffect } from "react";
import { formatDate } from "@/helpers/formatDate";
import { UilAngleRight } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import useProject from "@/hooks/useProject";
import Loading from "../Loading";

const RecentProjects = () => {
  const { loadP, projects } = useProject();
  const [lastprojects, setLastProjects] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const list = [...projects];
    const last = list.slice(-3);
    setLastProjects(last.reverse());
  }, [projects]);

  const handleClickViewAll = () => {
    router.push("/admin/projects");
  };
  if (loadP)
    return (
      <div className="flex flex-col items-center gap-4 my-7 py-3">
        <Loading />
        <p>
          <span className="text-sm mr-1"> ...Loading Projects</span>
        </p>
      </div>
    );

  return (
    <>
      <div className="py-2 md:py-4 px-1 md:px-5 md:shadow-boxSidebar rounded-lg lg:text-base text-sm">
        <p className="my-2">Here are your recent projects:</p>
        <div className="block">
          {lastprojects.length ? (
            <>
              {lastprojects.map((project) => (
                <div
                  key={project._id}
                  className="w-full flex items-center mb-4 gap-4 justify-between border-b-2 py-2"
                >
                  <div className="flex md:flex-row flex-col gap-4 md:items-center">
                    <div className=" w-12 h-10 rounded-md border-2 border-darkText">
                      <img
                        src={project.imageURL}
                        alt="project image"
                        className="w-full object-cover rounded-md h-full"
                      />
                    </div>
                    <span className="text-xs lg:text-sm font-bold">
                      {project.name}
                    </span>
                  </div>

                  <span className="text-xs lg:text-sm">
                    {formatDate(project.createdAt)}
                  </span>
                </div>
              ))}
              <div className="flex justify-end">
                <div
                  className="flex uppercase px-3 py-1 border-2 rounded-md cursor-pointer text-gray-500 hover:text-darkText text-xs lg:text-sm items-center"
                  onClick={handleClickViewAll}
                >
                  View all <UilAngleRight />
                </div>
              </div>
            </>
          ) : (
            <div className="py-2 px-4 text-center">
              <p className="text-slate-400 text-sm">
                You haven&apos;t registered any project yet
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
