import { UilListUl } from "@iconscout/react-unicons";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
import MenuProfile from "./MenuProfile";
import MenuNotification from "./MenuNotification";
import Link from "next/link";

function NavbarAdmin() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="sm:px-3 sm:pt-5 pt-2 px-1 sticky top-0 md:relative z-30">
      <div className="w-full bg-white rounded-lg shadow-boxSidebar flex justify-between items-center">
        <div className="sm:p-3 pl-3 sm:ml-3 items-center font-semibold flex gap-2 sm:text-base text-sm">
          <div className="flex sm:hidden" onClick={handleToggle}>
            <UilListUl />
          </div>
          <span className="xm:flex hidden">Welcome</span>
        </div>
        <div className="flex py-2 px-3 items-center">
          <Link
            href={"/"}
            className="text-xs xm:text-sm py-2 px-2 bg-slate-500 text-white rounded-lg mr-2"
          >
            View Web
          </Link>
          <MenuNotification />
          <MenuProfile />
        </div>
      </div>
      <MobileSidebar openSidebar={openSidebar} handleToggle={handleToggle} />
    </div>
  );
}

export default NavbarAdmin;
