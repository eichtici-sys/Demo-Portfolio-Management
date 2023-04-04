import TitleSection from "./TitleSection";
import usePortfolio from "@/hooks/usePortfolio";
import { motion } from "framer-motion";
import AnimateText from "./AnimateText";

const AboutResumen = () => {
  const { totalYears, totalCompanies, totalProjectsCompleted, about, profile } =
    usePortfolio();
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ delay: 0.75 }}
    >
      <section id="about" className={`p-0 pt-3 xm:pt-20 xm:pb-20 relative`}>
        <div
          className="absolute top-0 left-0 w-full h-full bg-mobilePos xm:bg-right bg-no-repeat xm:bg-sizeBG bg-contain  -z-10 grayscale opacity-10"
          style={{ backgroundImage: `url(${about.imageBG_URL})` }}
        ></div>
        <div className="max-w-7xl mx-auto pt-4 lg:pt-5">
          <TitleSection
            title={`Who is ${profile.name} ${profile.lastname} ?`}
            span={"A little more about me"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
            <div className="p-6 flex items-center">
              {about.imageAboutURL && (
                <img
                  src={about.imageResumenURL}
                  width={600}
                  height={600}
                  alt="About me Image"
                  className="w-auto mx-auto sm:w-auto sm:h-[90%] sm:mx-auto h-full max-h-[300px] xm:max-h-[600px]"
                />
              )}
            </div>
            <div className="p-2 xm:p-8 flex flex-col justify-center">
              <div className="px-6 text-justify max-w-md font-light text-[rgba(64 64 64 / 1)] dark:text-white xm:text-base text-sm">
                {about.resumen && <AnimateText text={about.resumen} />}
              </div>
            </div>
          </div>
          <span className="text-[rgba(64 64 64 / 1)] dark:text-white flex justify-center">
            Data that supports me
          </span>
          <div className="max-w-md mx-auto xm:px-6 grid grid-cols-1 gap-5 xm:grid-cols-3 mt-5 xm:mb-0 mb-5">
            <div className="text-center w-[70%] xm:w-auto xm:max-w-full mx-auto bg-primary1 dark:bg-slate-600 text-[rgba(64 64 64 / 1)] dark:text-white shadow-md py-3 px-6  rounded-md">
              <span className="font-bold text-2xl">
                {totalYears < 10 ? `0${totalYears}` : totalYears} +
              </span>
              <p className="font-semibold text-xs text-white dark:text-[#fafafa]">
                {totalYears > 1 ? "Years experience" : "Year experience"}
              </p>
            </div>
            <div className="text-center w-[70%] xm:w-auto xm:max-w-full mx-auto bg-primary1 dark:bg-slate-600 text-[rgba(64 64 64 / 1)] dark:text-white shadow-md py-3 px-6  rounded-md">
              <span className="font-bold text-2xl">
                {totalCompanies < 10 ? `0${totalCompanies}` : totalCompanies} +
              </span>
              <p className="font-semibold text-xs text-white dark:text-[#fafafa]">
                {totalYears > 1 ? "Companies worked" : "Company Worked"}
              </p>
            </div>
            <div className="text-center w-[70%] xm:w-auto xm:max-w-full mx-auto bg-primary1 dark:bg-slate-600 text-[rgba(64 64 64 / 1)] dark:text-white shadow-md py-3 px-6  rounded-md">
              <span className="font-bold text-2xl">
                {totalProjectsCompleted < 10
                  ? `0${totalProjectsCompleted}`
                  : totalProjectsCompleted}{" "}
                +
              </span>
              <p className="font-semibold text-xs text-white dark:text-[#fafafa]">
                {totalYears > 1 ? "Completed projects" : "Completed project"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutResumen;
