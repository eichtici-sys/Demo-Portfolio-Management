import NavLink from "next/link";
import Image from "next/image";
import {
  UilEstate,
  UilUser,
  UilDesktop,
  UilBriefcase,
  UilMessage,
  UilTimes,
  UilApps,
  UilLock,
} from "@iconscout/react-unicons";
import { useState } from "react";
import Link from "next/link";
import usePortfolio from "@/hooks/usePortfolio";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar = () => {
  const { handleThemeSwitch, isDarkToggle } = usePortfolio();
  const [toggle, setToggle] = useState(false);
  const { pathname } = useRouter();

  const handleClickToggle = () => {
    setToggle(!toggle);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#4e4e4e"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#ffbc00",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#a0a0a0" : "#ffbc00",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#404040"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <header className="w-full fixed bottom-0 top-[initial] xm:bottom-[initial] xm:top-0 bg-white dark:bg-black left-0 z-50 shadow">
          <nav className=" h-20 flex justify-between items-center gap-4 px-3 max-w-7xl mx-auto text-darkText dark:text-white">
            <NavLink href="/" scroll={true}>
              <Image
                width={120}
                height={120}
                src="/logotipo-eichtici-large.svg"
                alt="Imagen del Logotipo"
                className="h-[3.5rem] w-auto"
              />
            </NavLink>

            <div
              className={`fixed z-20 xm:relative ${
                toggle ? "bottom-0" : "-bottom-full"
              } xm:bottom-[initial] left-0 xm:left-[initial] w-full xm:w-auto pt-8 px-1 xs:px-6 pb-16 bg-white dark:bg-black dark:xm:bg-transparent xm:bg-transparent shadow-boxMenu xm:shadow-none rounded-oTop xm:rounded-none duration-300 xm:p-0 sm:text-[16px] text-sm md:h-full md:items-center`}
            >
              <ul className="grid grid-cols-3 xm:flex gap-0 xxs:gap-8 items-center md:h-full md:items-center">
                <li className="md:h-full md:justify-center flex flex-col items-center font-normal duration-300 hover:text-primary1 active:text-primary1 text-center">
                  <NavLink
                    href={"/"}
                    className={`${
                      pathname === "/"
                        ? "activeNav md:border-b-4 md:border-b-primary1"
                        : ""
                    } md:h-full md:flex md:items-center`}
                  >
                    <UilEstate
                      className="block xm:hidden mx-auto"
                      size={"24"}
                    />{" "}
                    Home
                  </NavLink>
                </li>
                <li className="md:h-full md:justify-center flex flex-col items-center font-normal duration-300 hover:text-primary1 active:text-primary1 text-center">
                  <NavLink
                    href={"/about"}
                    className={`${
                      pathname === "/about"
                        ? "activeNav md:border-b-4 md:border-b-primary1"
                        : ""
                    } md:h-full md:flex md:items-center`}
                  >
                    <UilUser className="block xm:hidden mx-auto" size={"24"} />
                    About
                  </NavLink>
                </li>
                <li className="md:h-full md:justify-center flex flex-col items-center font-normal duration-300 hover:text-primary1 active:text-primary1 text-center">
                  <NavLink
                    href={"/services"}
                    className={`${
                      pathname === "/services"
                        ? "activeNav md:border-b-4 md:border-b-primary1"
                        : ""
                    } md:h-full md:flex md:items-center`}
                  >
                    <UilDesktop
                      className="block xm:hidden mx-auto"
                      size={"24"}
                    />
                    Services
                  </NavLink>
                </li>
                <li className="md:h-full md:justify-center flex flex-col items-center font-normal duration-300 hover:text-primary1 active:text-primary1 text-center">
                  <NavLink
                    href={"/portfolio"}
                    className={`${
                      pathname === "/portfolio"
                        ? "activeNav md:border-b-4 md:border-b-primary1"
                        : ""
                    } md:h-full md:flex md:items-center`}
                  >
                    <UilBriefcase
                      className="block xm:hidden mx-auto"
                      size={"24"}
                    />
                    Portfolio
                  </NavLink>
                </li>
                <li className="md:h-full md:justify-center flex flex-col items-center font-normal duration-300 hover:text-primary1 active:text-primary1 text-center">
                  <NavLink
                    href={"/contact"}
                    className={`${
                      pathname === "/contact"
                        ? "activeNav md:border-b-4 md:border-b-primary1"
                        : ""
                    } md:h-full md:flex md:items-center`}
                  >
                    <UilMessage
                      className="block xm:hidden mx-auto"
                      size={"24"}
                    />{" "}
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div onClick={handleClickToggle}>
                <UilTimes
                  className="block xm:hidden absolute right-5 bottom-3 hover:text-black"
                  size={"28"}
                />
              </div>
            </div>
            <div onClick={handleClickToggle} className="block xm:hidden">
              <UilApps />
            </div>
            <div className="flex gap-2 items-center  ">
              <MaterialUISwitch
                sx={{ m: 1 }}
                defaultChecked={isDarkToggle}
                onChange={handleThemeSwitch}
              />

              <Link href={"/auth"}>
                <UilLock
                  className="mx-auto font-normal duration-300 cursor-pointer hover:text-primary1 active:text-primary1 text-center"
                  size={"24"}
                />
              </Link>
            </div>
          </nav>
        </header>
      </motion.div>
    </>
  );
};

export default Navbar;
