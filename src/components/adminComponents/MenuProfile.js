import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import AvatarProfile from "./AvatarProfile";
import useProfile from "@/hooks/useProfile";
import useAuth from "@/hooks/useAuth";
import useProject from "@/hooks/useProject";
import useQualification from "@/hooks/useQualification";
import useService from "@/hooks/useService";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import {
  UilAngleDown,
  UilSetting,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

const MenuProfile = () => {
  const { profile, logoutProfile } = useProfile();
  const { logoutAuth } = useAuth();
  const { logoutQualification } = useQualification();
  const { logoutProject } = useProject();
  const { logoutService } = useService();
  const cookies = new Cookies();

  const handleLogoutSession = () => {
    logoutAuth();
    logoutProfile();
    logoutQualification();
    logoutService();
    logoutProject();
    cookies.remove("token", { path: "/" });
  };
  return (
    <div className="w-auto flex items-center cursor-pointer">
      <Menu as="div" className="relative inline-block">
        <div className="flex items-center">
          <Menu.Button className="inline-flex w-full justify-center items-center rounded-md  shadow-none px-4 py-0 text-sm font-medium  focus:outline-none  text-darkText outline-none hover:transform-none">
            <AvatarProfile row={profile} nav={true} />
            <span className="pl-2 text-xs text-darkText">{profile?.name}</span>
            <UilAngleDown />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-gray-600 text-white" : "text-gray-900"
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <UilSetting className="text-primary2" />
                    ) : (
                      <UilSetting className="text-slate-500" />
                    )}
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-gray-600 text-white" : "text-gray-900"
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={handleLogoutSession}
                  >
                    {active ? (
                      <UilSignOutAlt className="text-primary2" />
                    ) : (
                      <UilSignOutAlt className="text-red-500" />
                    )}
                    Logout
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuProfile;
