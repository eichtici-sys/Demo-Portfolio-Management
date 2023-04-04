import TitleSection from "./TitleSection";
import { UilFileDownloadAlt, UilAngleRight } from "@iconscout/react-unicons";
import usePortfolio from "@/hooks/usePortfolio";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutSection = () => {
  const {
    downloadLastCV,
    totalYears,
    totalCompanies,
    totalProjectsCompleted,
    about,
  } = usePortfolio();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variantsAboutSection = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const title = {
    hidden: {
      opacity: 0,
      y: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const variantsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };
  const imageDivAbout = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const variantsDivInfo = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const variantsDescription = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };
  const variantsCardInfo = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="about" className="p-0 xm:pt-10 xm:pb-0 mb-12 xm:mb-0">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variantsAboutSection}
        className="max-w-7xl mx-auto pt-4 lg:pt-20"
      >
        <motion.div variants={title}>
          <TitleSection title={"About Me"} span={"Why Choose Me?"} />
        </motion.div>
        <motion.div
          variants={variantsContainer}
          className="grid grid-cols-1 sm:grid-cols-2 mt-4"
        >
          <motion.div variants={imageDivAbout} className="p-6">
            {about.imageAboutURL && (
              <img
                src={about.imageAboutURL}
                width={600}
                height={600}
                alt="About me Image"
                className="w-full sm:w-auto sm:h-[80%] sm:mx-auto h-full"
              />
            )}
          </motion.div>
          <motion.div
            variants={variantsDivInfo}
            className="p-2 xm:p-8 flex flex-col justify-center"
          >
            <motion.div
              variants={variantsDescription}
              className="px-6 text-justify max-w-md font-light text-[rgba(64 64 64 / 1)] dark:text-white xm:text-base text-sm"
            >
              {about.description}
            </motion.div>
            <motion.div
              variants={variantsDivInfo}
              className="max-w-md xm:px-6 grid grid-cols-1 gap-5 xm:grid-cols-3 mt-5 xm:mb-0 mb-5"
            >
              <motion.div
                variants={variantsCardInfo}
                className="text-center w-[70%] xm:w-auto xm:max-w-full mx-auto bg-white dark:bg-slate-600 text-[rgba(64 64 64 / 1)] dark:text-white shadow-md py-3 px-6  rounded-md"
              >
                <span className="font-bold text-2xl">
                  {totalYears < 10 ? `0${totalYears}` : totalYears} +
                </span>
                <p className="font-semibold text-xs text-gray-400 dark:text-[#fafafa]">
                  {totalYears > 1 ? "Years experience" : "Year experience"}
                </p>
              </motion.div>
              <motion.div
                variants={variantsCardInfo}
                className="text-center w-[70%] xm:w-auto xm:max-w-full mx-auto bg-white dark:bg-slate-600 text-[rgba(64 64 64 / 1)] dark:text-white shadow-md py-3 px-6  rounded-md"
              >
                <span className="font-bold text-2xl">
                  {totalCompanies < 10 ? `0${totalCompanies}` : totalCompanies}{" "}
                  +
                </span>
                <p className="font-semibold text-xs text-gray-400 dark:text-[#fafafa]">
                  {totalYears > 1 ? "Companies worked" : "Company Worked"}
                </p>
              </motion.div>
              <motion.div
                variants={variantsCardInfo}
                className="text-center w-[70%] xm:w-auto xm:max-w-full mx-auto bg-white dark:bg-slate-600 text-[rgba(64 64 64 / 1)] dark:text-white shadow-md py-3 px-6  rounded-md"
              >
                <span className="font-bold text-2xl">
                  {totalProjectsCompleted < 10
                    ? `0${totalProjectsCompleted}`
                    : totalProjectsCompleted}{" "}
                  +
                </span>
                <p className="font-semibold text-xs text-gray-400 dark:text-[#fafafa]">
                  {totalYears > 1 ? "Completed projects" : "Completed project"}
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={variantsCardInfo}
              className="pl-4 mt-3 xm:mx-0 mx-auto xm:mt-8 flex flex-col xm:flex-row gap-6"
            >
              <button className="flex" onClick={downloadLastCV}>
                Download CV
                <UilFileDownloadAlt className="ml-2" />
              </button>
              <Link
                href={"/about"}
                className=" text-darkText dark:text-white font-bold flex justify-center xm:justify-start items-center hover:text-primary1 dark:hover:text-primary1"
              >
                View More Info
                <UilAngleRight />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
