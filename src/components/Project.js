import { CldImage } from "next-cloudinary";
import { UilGithubAlt, UilLocationArrow } from "@iconscout/react-unicons";
import Link from "next/link";
const Project = ({ project }) => {
  return (
    <div className="px-3 py-2">
      <div className="bg-white dark:bg-slate-600 h-full rounded-xl px-3 py-4 dark:shadow-none shadow-boxSidebar">
        <span className="font-bold text-xs text-slate-500 dark:text-white">
          Featured Project
        </span>
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
                  className="bg-white dark:bg-black w-9 h-9 rounded-lg flex justify-center items-center text-gray-600 dark:text-white cursor-pointer hover:text-primary1 dark:hover:text-primary1 transition-colors duration-200"
                >
                  <UilLocationArrow className=" w-5 h-5" />
                </Link>
                <Link
                  href={project.repository}
                  target={"_blank"}
                  className="bg-white dark:bg-black w-9 h-9 rounded-lg flex justify-center items-center text-gray-600 dark:text-white cursor-pointer hover:text-primary1 dark:hover:text-primary1 transition-colors duration-200"
                >
                  <UilGithubAlt className=" w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 text-justify text-darkText dark:text-white font-light">
          <div className="text-xs px-2">
            {project.technologies.map((tech, index) => (
              <span key={tech._id}>{`${index !== 0 ? ", " : " "}${
                tech.name
              }`}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
