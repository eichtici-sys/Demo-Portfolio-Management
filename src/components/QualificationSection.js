import TitleSection from "./TitleSection";
import { UilGraduationCap, UilBriefcaseAlt } from "@iconscout/react-unicons";
import Education from "./Education";
import Works from "./Works";
import { useState } from "react";
import usePortfolio from "@/hooks/usePortfolio";

const QualificationSection = () => {
  const [tabContent, setTabContent] = useState(1);
  const { educations, works } = usePortfolio();

  const handleClickTab = (index) => {
    setTabContent(index);
  };

  return (
    <section
      id="qualification"
      className="p-0 pt-6 xm:pt-20 xm:pb-20 mb-12 xm:mb-0"
    >
      <div className="max-w-7xl mx-auto pt-4">
        <TitleSection
          title={"Qualification"}
          span={"My professional training"}
        />
        <div className="max-w-[900px] mx-auto py-4">
          {/* --------Tabs-------- */}
          <div className="grid grid-cols-2 py-10 max-w-sm mx-auto">
            <div
              className={`flex items-center gap-3 hover:text-[rgba(64 64 64 /1)] w-[80%] mx-auto pb-3 ${
                tabContent === 1
                  ? "text-[rgba(64 64 64 /1)] dark:text-slate-200 font-bold border-b-4 border-primary1"
                  : "text-gray-300 dark:text-gray-500"
              } justify-center cursor-pointer`}
              onClick={() => handleClickTab(1)}
            >
              <UilGraduationCap className="w-8 h-8" />
              Education
            </div>
            <div
              className={`flex items-center gap-3 hover:text-[rgba(64 64 64 /1)] w-[80%] mx-auto pb-3 ${
                tabContent === 2
                  ? "text-[rgba(64 64 64 /1)] dark:text-slate-200 font-bold border-b-4 border-primary1"
                  : "text-gray-300 dark:text-gray-500"
              } justify-center cursor-pointer`}
              onClick={() => handleClickTab(2)}
            >
              <UilBriefcaseAlt className="w-8 h-8" />
              Work
            </div>
          </div>
          {/* --------Section Tabbs-------- */}
          {/* --------Section 1-------- */}
          <Education tabContent={tabContent} array={educations} />
          <Works tabContent={tabContent} array={works} />
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
