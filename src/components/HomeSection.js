import Social from "./Social";
import { UilMessage } from "@iconscout/react-unicons";
import usePortfolio from "@/hooks/usePortfolio";
import Typed from "react-typed";
import { stringsProfile } from "@/data/datafake";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Inicio = () => {
  const { profile, socials, about } = usePortfolio();
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const socialDiv = {
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

  return (
    <section
      id="home"
      className="p-0 xm:pt-10 lg:h-screen mb-16 md:mb-5 xm:mb-0 lg:mb-6"
    >
      <div className="max-w-7xl mx-auto xm:pt-4">
        <div className="grid grid-cols-1 xm:grid-cols-2 xm:px-4 xm:py-8">
          <div className="flex xm:flex-row flex-col items-center w-full order-last xm:order-first">
            <div className="flex-1">
              <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
                className="flex xm:flex-col flex-row justify-start p-3 gap-4"
              >
                {socials.length
                  ? socials.map((social) => (
                      <motion.div variants={socialDiv} key={social._id}>
                        <Social socialN={social} />
                      </motion.div>
                    ))
                  : ""}
              </motion.div>
            </div>
            <div className="flex-auto px-5 xm:pl-12 xm:pr-6">
              <div className="text-center xm:text-start">
                <span className="text-primary1 text-md font-bold">
                  Hi there...
                </span>
                <h1 className="mb-4 text-[rgba(64 64 64 / 1)] dark:text-white">
                  I&apos;m{" "}
                  <span className="text-primary1">
                    {profile.name} {profile.lastname}
                  </span>
                </h1>
              </div>

              <div className="mx-auto font-bold text-base xm:text-xl pl-20 relative before:absolute before:content-[''] before:w-16 before:h-[1px] before:bg-slate-500 before:left-0 before:top-4 text-[rgba(64 64 64 / 1)] dark:text-white">
                <Typed
                  strings={stringsProfile}
                  typeSpeed={120}
                  backSpeed={50}
                  loop
                />
              </div>
              <p className="mt-2 xm:mt-6 text-sm text-center xm:text-left xm:text-base text-gray-500 dark:text-[#fafafa] font-light">
                {about.presentation}
              </p>
              <div className="flex mt-4 justify-center xm:justify-start cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="flex flex-nowrap linkbutton items-center"
                >
                  <span>Contact me</span>
                  <UilMessage className="ml-2 rotate-[-35deg]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-5 max-w-full xm:max-w-full mx-auto xm:mx-0  xm:p-10 rounded-full flex items-center">
            {about.imagePresentationURL && (
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                src={about.imagePresentationURL}
                width={600}
                height={600}
                className="w-full h-full"
                alt="About me Image"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
