import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import useProfile from "@/hooks/useProfile";
import { UilBell, UilEnvelopeExclamation } from "@iconscout/react-unicons";
import Link from "next/link";

const MenuNotification = () => {
  const { mails } = useProfile();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const listMails = [...mails];
    const filtered = listMails.filter((mail) => mail.state === false);
    const numberFiltered = Number(filtered.length);
    setCount(numberFiltered);
  }, [mails]);

  return (
    <div className="w-auto flex items-center cursor-pointer">
      <Menu as="div" className="relative inline-block">
        <div className="flex items-center">
          <Menu.Button className="inline-flex w-full justify-center items-center rounded-md  shadow-none px-2 py-0 text-sm font-medium  focus:outline-none  text-darkText outline-none hover:transform-none">
            <div className="relative">
              <UilBell className="w-7 h-7" />
              {count !== 0 ? (
                <div className="absolute top-0 -right-1 rounded-full w-4 h-4 bg-primary1 text-white text-[10px] flex justify-center items-center">
                  {count > 99 ? 99 : count}
                </div>
              ) : (
                <div></div>
              )}
            </div>
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
          <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <>
                    <div
                      className={`${
                        active ? "bg-gray-600 text-white" : "text-slate-500"
                      } group flex gap-3 w-full items-center rounded-md px-2 py-2 text-xs border-b-2`}
                    >
                      <UilEnvelopeExclamation className="text-primary1" />
                      {count !== 1
                        ? `You have ${count} new messages`
                        : `You have a new message`}
                    </div>
                    <Link
                      href={"/admin/mails"}
                      className="flex uppercase px-3 py-1 border-2 rounded-md cursor-pointer text-gray-500 hover:text-white hover:bg-darkText transition-all duration-200 text-xs items-center"
                    >
                      View all messages
                    </Link>
                  </>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuNotification;
