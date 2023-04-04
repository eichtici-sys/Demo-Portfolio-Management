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
import Image from "next/image";
import { useState } from "react";
import ItemSidebar from "./ItemSidebar";
import { useRouter } from "next/router";

export default function MobileSidebar({ openSidebar, handleToggle }) {
  const router = useRouter();
  return (
    <div
      className={`h-screen fixed top-0 ${
        openSidebar ? "left-1" : "-left-full"
      } font-poppins flex justify-start items-center z-50 w-60`}
    >
      <div className="flex w-56 h-[98%] justify-start items-start flex-col bg-[rgba(255,255,255,0.96)] shadow-boxSidebar backdrop-blur-sm rounded-lg border-[1px] border-rgba px-4 py-4">
        <div
          className="flex self-end rounded-md cursor-pointer"
          onClick={handleToggle}
        >
          <UilListUl />
        </div>
        <div className="flex items-center rounded-full w-16 self-center mt-2 mb-4">
          <Image
            width={50}
            height={50}
            src="/logotipo-eichtici.svg"
            alt="Logo Image"
            className="w-full"
            priority={true}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full mb-3">
            <h3 className="mb-2 text-sm">Principal</h3>
            <ItemSidebar
              icon={<UilApps />}
              name="Resumen"
              href={"/admin"}
              mobile={true}
              pathname={router.pathname}
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <h3 className="mb-2 text-sm">Profile</h3>
            <ItemSidebar
              icon={<UilUserSquare />}
              name="Information"
              href={"/admin/information"}
              mobile={true}
              pathname={router.pathname}
            />
            <ItemSidebar
              icon={<UilClipboardNotes />}
              name="Skills"
              href={"/admin/skills"}
              mobile={true}
              pathname={router.pathname}
            />
            <ItemSidebar
              icon={<UilFileInfoAlt />}
              name="CV"
              href={"/admin/curriculum"}
              mobile={true}
              pathname={router.pathname}
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <h3 className="mb-2 text-sm">Qualification</h3>
            <ItemSidebar
              icon={<UilGraduationCap />}
              name="Education"
              href={"/admin/education"}
              mobile={true}
              pathname={router.pathname}
            />
            <ItemSidebar
              icon={<UilBriefcaseAlt />}
              name="Experience"
              href={"/admin/experience"}
              mobile={true}
              pathname={router.pathname}
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <h3 className="mb-2 text-sm">Works</h3>
            <ItemSidebar
              icon={<UilWebGrid />}
              name="Services"
              href={"/admin/works"}
              mobile={true}
              pathname={router.pathname}
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <h3 className="mb-2 text-sm">Portfolio</h3>
            <ItemSidebar
              icon={<UilFolderOpen />}
              name="Projects"
              href={"/admin/projects"}
              mobile={true}
              pathname={router.pathname}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
