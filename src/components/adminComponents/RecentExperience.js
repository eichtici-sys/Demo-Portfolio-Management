import { useState, useEffect } from "react";
import { UilAngleRight } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import Loading from "../Loading";
import useQualification from "@/hooks/useQualification";

const RecentExperience = () => {
  const { loader, experiences } = useQualification();
  const [lastExperiences, setLastExperiences] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const list = [...experiences];
    const last = list.slice(-3);
    setLastExperiences(last.reverse());
  }, [experiences]);

  const handleClickViewAll = () => {
    router.push("/admin/experience");
  };
  if (loader)
    return (
      <div className="flex flex-col items-center gap-4 my-7 py-3">
        <Loading />
        <p>
          <span className="text-sm mr-1"> ...Loading Educations</span>
        </p>
      </div>
    );
  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1 md:shadow-boxSidebar mt-3 rounded-lg lg:text-base text-sm">
      <p className="my-5">Here are your recent Experiences:</p>
      <div className="block">
        {lastExperiences.length ? (
          <>
            {lastExperiences.map((exp) => (
              <div
                key={exp._id}
                className="w-full flex items-center mb-4 gap-4 justify-between border-b-2 py-2"
              >
                <div className="flex gap-4 items-center">
                  <span className="text-sm font-bold">{exp.title}</span>
                </div>
                <div className="text-xs lg:text-sm">
                  <span className="rounded-lg px-2 py-1 text-center text-white bg-amber-500 select-none">
                    {exp.startYear} - {exp.finishYear}
                  </span>
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <div
                className="flex uppercase px-3 py-1 border-2 rounded-md cursor-pointer text-gray-500 hover:text-darkText hover:border-gray-800 transition-all duration-200 text-xs lg:text-sm items-center"
                onClick={handleClickViewAll}
              >
                View all <UilAngleRight />
              </div>
            </div>
          </>
        ) : (
          <div className="py-2 px-4 text-center">
            <p className="text-slate-400 text-sm">
              You haven&apos;t registered any Experience yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentExperience;
