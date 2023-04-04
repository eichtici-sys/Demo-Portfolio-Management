import TitleSection from "./TitleSection";
import Service from "./Service";
import usePortfolio from "@/hooks/usePortfolio";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ServicesSection = () => {
  const { services } = usePortfolio();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variantsServicesSection = {
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

  const serviceDiv = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="services" className="p-0 pt-1 xm:pt-20 xm:pb-10 mb-12 xm:mb-0">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variantsServicesSection}
        className="max-w-7xl mx-auto pt-4"
      >
        <motion.div variants={title}>
          <TitleSection title={"Services"} span={"What I offer"} />
        </motion.div>
        <motion.div
          variants={variantsContainer}
          className="py-6 px-3 md:px:0 grid grid-cols-1 md:grid-cols-3 sm:max-w-lg xm:max-w-full  sm:mx-auto justify-center gap-x-7 gap-y-7 mt-7"
        >
          {services.map((serv) => (
            <motion.div variants={serviceDiv} key={serv._id}>
              <Service dataArray={serv} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
