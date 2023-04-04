import {
  UilListUl,
  UilApps,
  UilUserSquare,
  UilFileInfoAlt,
  UilClipboardNotes,
  UilGraduationCap,
  UilBriefcaseAlt,
  UilWebGrid,
  UilFolderOpen,
  UilSignout,
} from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ItemSidebar from "./ItemSidebar";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const router = useRouter();

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
      width: "auto",
    },
  };
  const sidebarVariants = {
    true: {
      padding: "16px",
    },
    false: {
      width: "3.5rem",
      transition: {
        delay: 0.4,
      },
      padding: "16px 6px",
    },
  };
  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
      marginTop: "0",
      marginBottom: "2rem",
    },
    false: {
      alignSelf: "flex-start",
      width: "3rem",
      marginTop: "1.5rem",
    },
  };

  const menuIconVariants = {
    true: {
      alignSelf: "end",
    },
    false: {
      alignSelf: "center",
    },
  };
  const handleToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <motion.div
      variants={sideContainerVariants}
      initial={`${openSidebar}`}
      animate={`${openSidebar}`}
      className="h-screen sticky top-0 left-0 font-poppins sm:flex hidden justify-start items-center"
    >
      <motion.div
        initial={`${openSidebar}`}
        animate={`${openSidebar}`}
        variants={sidebarVariants}
        className="flex w-56 h-[95%] justify-start items-start flex-col m-2.5 bg-[rgba(255,255,255,0.96)] shadow-boxSidebar backdrop-blur-sm rounded-lg border-[1px] border-rgba"
      >
        <motion.div
          className="flex self-end rounded-md cursor-pointer"
          whileHover={{
            scale: 1.2,
            rotate: 180,
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(3.5px)",
            WebkitBackdropFilter: "blur(3.5px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
          variants={menuIconVariants}
          onClick={handleToggle}
        >
          <UilListUl className="w-auto" />
        </motion.div>
        <motion.div
          initial={`${openSidebar}`}
          animate={`${openSidebar}`}
          variants={profileVariants}
          className="flex items-center rounded-full"
          transition={{ duration: 0.4 }}
        >
          <Image
            width={100}
            height={100}
            src="/logotipo-eichtici.svg"
            alt="Logo Image"
            className="w-full"
            priority={true}
          />
        </motion.div>
        {/* Groups */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full mb-3">
            <motion.h3
              animate={{
                opacity: openSidebar ? 1 : 0,
                height: openSidebar ? "auto" : 0,
              }}
              className="mb-3"
            >
              Principal
            </motion.h3>
            <ItemSidebar
              icon={<UilApps />}
              name="Resumen"
              href={"/admin"}
              pathname={router.pathname}
            />
          </div>

          <div className="flex flex-col w-full mb-3">
            <motion.h3
              animate={{
                opacity: openSidebar ? 1 : 0,
                height: openSidebar ? "auto" : 0,
              }}
              className="mb-3"
            >
              Profile
            </motion.h3>
            <ItemSidebar
              icon={<UilUserSquare />}
              name="Information"
              href={"/admin/information"}
              pathname={router.pathname}
            />
            <ItemSidebar
              icon={<UilClipboardNotes />}
              name="Skills"
              href={"/admin/skills"}
              pathname={router.pathname}
            />
            <ItemSidebar
              icon={<UilFileInfoAlt />}
              name="CV"
              href={"/admin/curriculum"}
              pathname={router.pathname}
            />
          </div>

          <div className="flex flex-col w-full mb-3">
            <motion.h3
              animate={{
                opacity: openSidebar ? 1 : 0,
                height: openSidebar ? "auto" : 0,
              }}
              className="mb-3"
            >
              Qualification
            </motion.h3>
            <ItemSidebar
              icon={<UilGraduationCap />}
              name="Education"
              href={"/admin/education"}
              pathname={router.pathname}
            />
            <ItemSidebar
              icon={<UilBriefcaseAlt />}
              name="Experience"
              href={"/admin/experience"}
              pathname={router.pathname}
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <motion.h3
              animate={{
                opacity: openSidebar ? 1 : 0,
                height: openSidebar ? "auto" : 0,
              }}
              className="mb-3"
            >
              Works
            </motion.h3>
            <ItemSidebar
              icon={<UilWebGrid />}
              name="Services"
              href={"/admin/works"}
              pathname={router.pathname}
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <motion.h3
              animate={{
                opacity: openSidebar ? 1 : 0,
                height: openSidebar ? "auto" : 0,
              }}
              className="mb-3"
            >
              Portfolio
            </motion.h3>
            <ItemSidebar
              icon={<UilFolderOpen />}
              name="Projects"
              href={"/admin/projects"}
              pathname={router.pathname}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
