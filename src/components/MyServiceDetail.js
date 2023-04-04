import {
  UilCheckCircle,
  UilWebGrid,
  UilDesktopAlt,
  UilServerNetworkAlt,
  UilServicemark,
} from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import AnimateText from "./AnimateText";

const MyServiceDetail = ({ dataArray }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  const variantschild = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const animDiv = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.3,
      },
    },
  };
  const anim = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 xm:grid-cols-3 gap-x-4 px-4"
      >
        <motion.div variants={animDiv} className="col-span-1 xm:col-span-1">
          <div className="w-full h-full flex flex-col items-center gap-2 justify-center p-5 text-[rgba(64 64 64 /1)] dark:text-white p-5 rounded-xl">
            <span className="font-bold text-xl text-primary1">
              <AnimateText text={dataArray.name} />
            </span>
            {(() => {
              switch (dataArray.icon) {
                case "web":
                  return (
                    <UilWebGrid className="block w-[50px] h-[50px] mb-4 text-[rgba(64 64 64 /1)] dark:text-white" />
                  );
                case "frontend":
                  return (
                    <UilDesktopAlt className="block w-[50px] h-[50px] mb-4 text-[rgba(64 64 64 /1)] dark:text-white" />
                  );
                case "backend":
                  return (
                    <UilServerNetworkAlt className="block w-[50px] h-[50px] mb-4 text-[rgba(64 64 64 /1)] dark:text-white" />
                  );
                default:
                  return (
                    <UilServicemark className="block w-[50px] h-[50px] mb-4 text-[rgba(64 64 64 /1)] dark:text-white" />
                  );
              }
            })()}
          </div>
        </motion.div>
        <motion.div
          variants={animDiv}
          className="cols-span-1 xm:col-span-2  bg-white dark:bg-slate-600 text-[rgba(64 64 64 /1)] dark:text-white p-5 rounded-xl"
        >
          <span className="font-light text-sm">{dataArray.description}</span>
          <ul className="grid gap-y-2 mt-3">
            {dataArray.servicesDescriptions.map((item) => (
              <motion.li
                variants={variantschild}
                initial="hidden"
                animate="show"
                className="flex items-center gap-x-3 font-light text-sm"
                key={item._id}
              >
                <motion.div variants={anim}>
                  <UilCheckCircle className="text-primary1 w-[21px] h-[21px]" />
                </motion.div>
                <motion.div variants={anim}>
                  <AnimateText text={item.description} />
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyServiceDetail;
