import Link from "next/link";
import React from "react";

const FooterAdmin = () => {
  return (
    <div className="sm:px-3 px-1 pb-4">
      <div className="w-full bg-white rounded-lg shadow-boxSidebar flex justify-between items-center">
        <div className="px-5 py-3 flex md:flex-row flex-col text-center md:text-start gap-2 justify-between w-full text-sm text-slate-500">
          <span>
            <Link href={"https://www.eichtici.com"}>
              ©Eichtici Developer {new Date().getFullYear()}
            </Link>{" "}
            - Coded by Henry Tirado
          </span>
          <span>Eichtici Portfolio Admin</span>
        </div>
      </div>
    </div>
  );
};

export default FooterAdmin;
