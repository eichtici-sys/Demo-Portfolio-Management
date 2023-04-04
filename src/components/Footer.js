import Image from "next/image";
import NavLink from "next/link";
import usePortfolio from "@/hooks/usePortfolio";
import Social from "./Social";

const Footer = () => {
  const { socials } = usePortfolio();

  return (
    <>
      <footer className="w-full bg-darkText text-white shadow mb-[80px] xm:mb-0">
        <div className="flex items-center gap-4 px-3 pt-4 max-w-7xl mx-auto">
          <div className="flex flex-col w-full">
            <div className="my-3">
              <Image
                src={"/logotipo-eichtici.svg"}
                alt="logotipo Eichtici Developer"
                width={400}
                height={400}
                className=" h-14 mx-auto"
              />
            </div>
            <nav className="flex justify-center gap-5 mt-5 mb-7 xm:text-base text-xs">
              <NavLink
                href={"/"}
                className="flex flex-nowrap items-center cursor-pointer hover:text-primary2 transition-all hover:translate-y-1"
              >
                Home
              </NavLink>
              <NavLink
                href={"/about"}
                className="flex flex-nowrap items-center cursor-pointer hover:text-primary2 transition-all hover:translate-y-1"
              >
                About
              </NavLink>

              <NavLink
                href={"/services"}
                className="flex flex-nowrap items-center cursor-pointer hover:text-primary2 transition-all hover:translate-y-1"
              >
                Services
              </NavLink>

              <NavLink
                href={"/portfolio"}
                className="flex flex-nowrap items-center cursor-pointer hover:text-primary2 transition-all hover:translate-y-1"
              >
                Portfolio
              </NavLink>

              <NavLink
                href={"/contact"}
                className="flex flex-nowrap items-center cursor-pointer hover:text-primary2 transition-all hover:translate-y-1"
              >
                Contact
              </NavLink>
            </nav>
            <div className="flex justify-center p-3 gap-4 mb-6">
              {socials.length
                ? socials.map((social) => (
                    <Social key={social._id} socialN={social} alter={true} />
                  ))
                : ""}
            </div>
            <div className="text-center mb-7 xm:text-sm text-xs">
              <span>
                ©Eichtici Developer {new Date().getFullYear()} - All rigths
                reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
