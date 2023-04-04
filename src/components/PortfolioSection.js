import TitleSection from "./TitleSection";
import usePortfolio from "@/hooks/usePortfolio";
import Project from "./Project";
import { UilAngleRight } from "@iconscout/react-unicons";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const PortfolioSection = () => {
  const { lastProjectsFeatured } = usePortfolio();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variantsPortfolioSection = {
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
        staggerChildren: 0.3,
      },
    },
  };

  const projectDiv = {
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
    <section
      id="portfolio"
      className="p-0 pt-6 xm:pt-20 xm:pb-20 mb-20 xm:mb-0"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variantsPortfolioSection}
        className="max-w-7xl mx-auto pt-4"
      >
        <motion.div variants={title}>
          <TitleSection title={"Portfolio"} span={"Most recent projects"} />
        </motion.div>
        <motion.div
          variants={variantsContainer}
          className="py-6 grid grid-cols-1 xm:grid-cols-2 sm:max-w-lg sm:mx-auto xm:max-w-full lg:grid-cols-3 justify-center gap-x-7 gap-y-3"
        >
          {lastProjectsFeatured.map((item) => (
            <motion.div variants={projectDiv} key={item._id}>
              <Project project={item} />
            </motion.div>
          ))}
        </motion.div>
        {lastProjectsFeatured && (
          <div className=" w-52 xm:w-fit mx-auto text-center xm:mt-0 mt-5">
            <Link
              href={"/portfolio"}
              className="flex justify-center uppercase px-3 py-1 border-2 rounded-md cursor-pointer text-gray-500 dark:text-white hover:text-white hover:bg-darkText transition-all duration-200 text-xs lg:text-sm items-center"
            >
              View all <UilAngleRight />
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
