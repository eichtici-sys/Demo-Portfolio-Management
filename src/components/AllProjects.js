import TitleSection from "./TitleSection";
import usePortfolio from "@/hooks/usePortfolio";
import InfoProject from "./InfoProject";
import Loading from "./Loading";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const projectsDiv = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AllProjects = () => {
  const { projects } = usePortfolio();
  return (
    <section id="all-projects" className="p-0 pt-3 xm:pt-20 xm:pb-20">
      <div className="max-w-7xl mx-auto xm:pt-4">
        <TitleSection title={"All Projects"} span={"My Complete Portfolio"} />

        {projects.length ? (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="py-6 grid grid-cols-1 justify-center gap-x-7 gap-y-3 bg-transparent xm:bg-white xm:dark:bg-slate-600 rounded-xl px-6 mt-7"
          >
            {projects.map((item) => (
              <motion.div key={item._id} variants={projectsDiv}>
                <InfoProject project={item} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="w-full h-[300px] flex justify-center items-center">
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
