import { CldImage } from "next-cloudinary";
import { UilGithubAlt, UilLocationArrow } from "@iconscout/react-unicons";
import Link from "next/link";
const HomeSection = ({ project }) => {
  return (
    <div className="xm:px-3 px-0 py-2">
      <div className=" bg-white dark:bg-darkText dark:shadow-none  h-full rounded-xl px-5 py-4 shadow-boxSidebar">
        <div className="grid grid-cols-1 xm:grid-cols-3 xm:gap-x-6">
          <div className="col-span-1 py-4">
            {project.featured === "Featured" ? (
              <span className="font-bold text-xs text-[rgba(64 64 64 /1)] dark:text-white">
                Featured Project
              </span>
            ) : (
              <span className="font-bold text-xs text-[rgba(64 64 64 /1)] dark:text-white">
                Normal Project
              </span>
            )}
            <div className="w-full h-56 max-h-56 relative group mt-2 overflow-hidden rounded-lg">
              <CldImage
                width={400}
                height={300}
                src={project.public_id}
                alt={`Image of Project ${project.name}`}
                className="object-cover w-full h-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
              />
              <div className=" invisible w-full h-full absolute top-0 left-0 bgLinear rounded-lg group-hover:visible flex transition-all duration-100 flex-col justify-end pointer-events-none group-hover:pointer-events-auto">
                <div className=" w-full rounded-b-lg flex items-center justify-between px-4">
                  <span className="text-white actions px-3 py-5 select-none">
                    {project.name}
                  </span>
                  <div className="flex gap-x-2 px-2">
                    <Link
                      href={project.url}
                      target={"_blank"}
                      className="bg-white w-9 h-9 rounded-lg flex justify-center items-center text-gray-600 cursor-pointer hover:text-primary1 transition-colors duration-200"
                    >
                      <UilLocationArrow className=" w-5 h-5" />
                    </Link>
                    <Link
                      href={project.repository}
                      target={"_blank"}
                      className="bg-white w-9 h-9 rounded-lg flex justify-center items-center text-gray-600 cursor-pointer hover:text-primary1 transition-colors duration-200"
                    >
                      <UilGithubAlt className=" w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 self-center">
            <div className="py-3 text-justify text-[rgba(64 64 64 /1)] dark:text-[#fafafa] font-light">
              <div className="text-xs px-2">
                {project.technologies.map((tech, index) => (
                  <span key={tech._id}>{`${index !== 0 ? ", " : " "}${
                    tech.name
                  }`}</span>
                ))}
              </div>
            </div>
            <span className="font-bold text-sm text-[rgba(64 64 64 /1)] dark:text-white block text-xl">
              {project.name}
            </span>
            <p className="text-justify font-light text-[rgba(64 64 64 /1)] dark:text-[#d1d1d1] text-sm mt-2">
              {project.description}
            </p>
            <div className=" w-full rounded-lg flex flex-col justify-end">
              <div className=" w-full rounded-b-lg flex items-center justify-between px-0 py-5">
                <div className="flex gap-x-2">
                  <Link
                    href={project.url}
                    target={"_blank"}
                    className="bg-darkText dark:bg-black w-fit px-4 text-sm gap-2 h-9 rounded-lg flex justify-center items-center text-white cursor-pointer hover:text-primary2 transition-colors duration-200"
                  >
                    <UilLocationArrow className=" w-5 h-5" />
                    Demo
                  </Link>
                  <Link
                    href={project.repository}
                    target={"_blank"}
                    className="bg-darkText dark:bg-black w-fit px-4 text-sm gap-2 h-9 rounded-lg flex justify-center items-center text-white cursor-pointer hover:text-primary2 transition-colors duration-200"
                  >
                    <UilGithubAlt className=" w-5 h-5" />
                    Repository
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
