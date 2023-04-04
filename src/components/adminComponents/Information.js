import { useState } from "react";
import { UilUserSquare, UilChatBubbleUser } from "@iconscout/react-unicons";
import Breadcrumb from "./Breadcrumb";
import ProfileTab from "./ProfileTab";
import { informationBC } from "@/data/breadcrumbList";
import MoreInfoTab from "./MoreInfoTab";

function Information() {
  const [tabContent, setTabContent] = useState(1);

  const handleClickTab = (index) => {
    setTabContent(index);
  };

  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1">
      <div className="w-full rounded-lg flex justify-between backdrop-blur-sm">
        <div className="w-full bg-white py-2 sm:py-3 rounded-lg px-3 sm:px-4">
          <div className="mb-2 sm:py-3 py-0">
            <Breadcrumb list={informationBC} />
          </div>
          {/* Tabs */}
          <div className="grid grid-cols-2 py-2 max-w-md mx-auto">
            <div
              className={`flex items-center gap-1 md:gap-3 hover:text-darkText w-[80%] mx-auto pb-3 text-sm md:text-base ${
                tabContent === 1
                  ? "text-darkText font-bold border-b-4 border-primary1"
                  : "text-gray-300"
              } justify-center cursor-pointer`}
              onClick={() => handleClickTab(1)}
            >
              <UilUserSquare />
              Profile
            </div>
            <div
              className={`flex items-center gap-1 md:gap-3 hover:text-darkText w-[80%] mx-auto pb-3 text-sm md:text-base ${
                tabContent === 2
                  ? "text-darkText font-bold border-b-4 border-primary1"
                  : "text-gray-300"
              } justify-center cursor-pointer`}
              onClick={() => handleClickTab(2)}
            >
              <UilChatBubbleUser />
              More info
            </div>
          </div>
          <div className="w-full">
            <ProfileTab tabContent={tabContent} />
            <MoreInfoTab tabContent={tabContent} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
