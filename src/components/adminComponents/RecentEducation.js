import { useState, useEffect } from "react";
import { UilAngleRight } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import Loading from "../Loading";
import useQualification from "@/hooks/useQualification";

const RecentEducation = () => {
  const { educations, loader } = useQualification();
  const [lasteducations, setLastEducations] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const list = [...educations];
    const last = list.slice(-3);
    setLastEducations(last.reverse());
  }, [educations]);

  const handleClickViewAll = () => {
    router.push("/admin/education");
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
      <p className="my-5">Here are your recent Educations:</p>

      <div className="block">
        {lasteducations.length ? (
          <>
            {lasteducations.map((education) => (
              <div
                key={education._id}
                className="w-full flex items-center mb-4 gap-4 justify-between border-b-2 py-2"
              >
                <div className="flex gap-4 items-center">
                  <span className="text-sm font-bold">{education.title}</span>
                </div>
                <div className="text-xs lg:text-sm">
                  <span className="rounded-lg px-2 py-1 text-center text-white bg-slate-400 select-none">
                    {education.startYear} - {education.finishYear}
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
            You haven&apos;t added any education yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentEducation;
