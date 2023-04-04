import { UilCalendarAlt } from "@iconscout/react-unicons";

const Works = ({ tabContent, array }) => {
  return (
    <>
      <div
        className={`py-4 px-6 ${
          tabContent === 2 ? "grid" : "hidden"
        } xm:grid-cols-[0.5fr] justify-center`}
      >
        <div className=" max-w-3xl">
          {array.map((exp, index) => (
            <div
              className="grid grid-cols-[1fr,max-content,1fr] gap-x-6 "
              key={exp._id}
            >
              {(index % 2 === 0) | (index === 0) ? (
                ""
              ) : (
                <>
                  <div></div>
                  <div>
                    <span className="inline-block w-[13px] h-[13px] bg-primary1 rounded-full "></span>
                    <span className="block w-[1px] h-full bg-primary1 translate-x-[6px] translate-y-[-7px]"></span>
                  </div>
                </>
              )}

              <div>
                <h3 className="font-bold text-[rgba(64 64 64 /1)] dark:text-white">
                  {exp.title}
                </h3>
                <span className=" inline-block text-xs text-gray-500 dark:text-gray-300 font-light mb-3">
                  {exp.place}
                </span>
                <div className="flex gap-1 text-sm items-center text-gray-600 dark:text-gray-400">
                  <UilCalendarAlt className="w-[16px] h-[16px] text-gray-500 dark:text-gray-300" />{" "}
                  {exp.startYear} - {exp.finishYear}
                </div>
              </div>
              {(index % 2 === 0) | (index === 0) ? (
                <div>
                  <span className="inline-block w-[13px] h-[13px] bg-primary1 rounded-full "></span>
                  <span className="block w-[1px] h-full bg-primary1 translate-x-[6px] translate-y-[-7px]"></span>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
