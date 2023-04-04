import React from "react";

const TitleSection = ({ title, span }) => {
  return (
    <div className="w-full text-center text-[rgba(64 64 64 / 1)] dark:text-white transition-all duration-500">
      <h2 className="text-center mb-3">{title}</h2>
      <span className="font-light">{span}</span>
      <div className="w-[200px] h-[3px] bg-gray-400 mx-auto mt-4 relative rounded-sm">
        <div className=" w-10 h-3 bg-primary1 shadow-lg absolute -top-1 left-[50%] translate-x-[-50%] rounded-lg"></div>
      </div>
    </div>
  );
};

export default TitleSection;
