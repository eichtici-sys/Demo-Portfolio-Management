import AvatarProfile from "@/components/adminComponents/AvatarProfile";
import EducationActions from "@/components/adminComponents/EducationActions";
import CurriculumActions from "@/components/adminComponents/CurriculumActions";
import ExperienceActions from "@/components/adminComponents/ExperienceActions";
import TechnologyActions from "@/components/adminComponents/TechnologyActions";
import ProjectActions from "@/components/adminComponents/ProjectActions";
import TaskActions from "@/components/adminComponents/TaskActions";
import DescriptionActions from "@/components/adminComponents/DescriptionActions";
import SkillActions from "@/components/adminComponents/SkillActions";
import LevelActions from "@/components/adminComponents/LevelActions";
import SocialActions from "@/components/adminComponents/SocialActions";
import ServiceActions from "@/components/adminComponents/ServiceActions";
import ImageProject from "@/components/adminComponents/ImageProject";
import Phases from "@/components/adminComponents/Phases";
import CVState from "@/components/adminComponents/CVState";
import TaskState from "@/components/adminComponents/TaskState";
import { formatDate } from "@/helpers/formatDate";
import MailState from "@/components/adminComponents/MailState";
import MailPotential from "@/components/adminComponents/MailPotential";

const educationColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "title",
    headerName: "Title",
    width: 170,
    headerAlign: "center",
  },
  {
    field: "place",
    headerName: "Place",
    width: 280,
    headerAlign: "center",
  },
  {
    field: "startYear",
    headerName: "Start Year",
    width: 100,
    renderCell: (params) => (
      <div className="flex p-2">
        <div className="rounded-xl px-3 py-2 text-center text-white bg-green-600 select-none">
          {params.row.startYear}
        </div>
      </div>
    ),
    headerAlign: "center",
  },
  {
    field: "finishYear",
    headerName: "Finish Year",
    width: 100,
    renderCell: (params) => (
      <div className="flex p-2">
        <div className="rounded-xl px-3 py-2 text-center text-white bg-amber-500 select-none">
          {params.row.finishYear}
        </div>
      </div>
    ),
    headerAlign: "center",
  },
  {
    field: "user",
    headerName: "Added By",
    width: 130,
    headerAlign: "center",
    renderCell: (params) => <AvatarProfile {...params} row={params.row} />,
    sortable: false,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    renderCell: (params) => formatDate(params.row.createdAt),
    headerAlign: "center",
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 150,
    renderCell: (params) => formatDate(params.row.updatedAt),
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <EducationActions {...params} row={params.row} />,
    headerAlign: "center",
  },
];

const curriculumColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 170,
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 280,
    headerAlign: "center",
  },
  {
    field: "visible",
    headerName: "Visibility",
    width: 280,
    headerAlign: "center",
    renderCell: (params) => <CVState {...params} row={params.row} />,
  },
  {
    field: "user",
    headerName: "Added By",
    width: 130,
    headerAlign: "center",
    renderCell: (params) => <AvatarProfile {...params} row={params.row} />,
    sortable: false,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    renderCell: (params) => formatDate(params.row.createdAt),
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <CurriculumActions {...params} row={params.row} />,
    headerAlign: "center",
  },
];

const experienceColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "title",
    headerName: "Title",
    width: 170,
    headerAlign: "center",
  },
  {
    field: "place",
    headerName: "Place",
    width: 280,
    headerAlign: "center",
  },
  {
    field: "startYear",
    headerName: "Start Year",
    width: 100,
    renderCell: (params) => (
      <div className="flex p-2">
        <div className="rounded-xl px-3 py-2 text-center text-white bg-green-600 select-none">
          {params.row.startYear}
        </div>
      </div>
    ),
    headerAlign: "center",
  },
  {
    field: "finishYear",
    headerName: "Finish Year",
    width: 100,
    renderCell: (params) => (
      <div className="flex p-2">
        <div className="rounded-xl px-3 py-2 text-center text-white bg-amber-500 select-none">
          {params.row.finishYear}
        </div>
      </div>
    ),
    headerAlign: "center",
  },
  {
    field: "user",
    headerName: "Added By",
    width: 130,
    headerAlign: "center",
    renderCell: (params) => <AvatarProfile {...params} row={params.row} />,
    sortable: false,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    renderCell: (params) => formatDate(params.row.createdAt),
    headerAlign: "center",
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 150,
    renderCell: (params) => formatDate(params.row.updatedAt),
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <ExperienceActions {...params} row={params.row} />,
    headerAlign: "center",
  },
];

const technologiesColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    headerAlign: "center",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    headerAlign: "center",
    renderCell: (params) => formatDate(params.row.createdAt),
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 150,
    headerAlign: "center",
    renderCell: (params) => formatDate(params.row.updatedAt),
  },
  {
    field: "project",
    headerName: "Project",
    width: 160,
    headerAlign: "center",
    renderCell: (params) => params.row.project.name,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    headerAlign: "center",
    renderCell: (params) => <TechnologyActions {...params} row={params.row} />,
  },
];

const taskColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    headerAlign: "center",
  },

  {
    field: "state",
    headerName: "State",
    width: 160,
    headerAlign: "center",
    renderCell: (params) => <TaskState {...params} row={params.row} />,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    headerAlign: "center",
    renderCell: (params) => <TaskActions {...params} row={params.row} />,
  },
];

const projectColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    headerAlign: "center",
  },
  {
    field: "state",
    headerName: "State",
    width: 200,
    headerAlign: "center",
    renderCell: (params) => (
      <div className="flex p-2">
        <div
          className={`border-2 rounded-xl px-2 py-1 w-[100px] text-center text-white ${
            params.row.state === "To Begin"
              ? " bg-amber-500"
              : params.row.state === "In progress"
              ? " bg-indigo-500"
              : " bg-green-500"
          }`}
        >
          {params.row.state}
        </div>
      </div>
    ),
  },
  {
    field: "imageURL",
    headerName: "Image",
    width: 100,
    headerAlign: "center",
    renderCell: (params) => <ImageProject {...params} row={params.row} />,
  },
  {
    field: "phase",
    headerName: "Phase",
    width: 170,
    headerAlign: "center",
    renderCell: (params) => <Phases {...params} row={params.row} />,
  },
  {
    field: "creator",
    headerName: "Added By",
    width: 100,
    headerAlign: "center",
    renderCell: (params) => (
      <AvatarProfile {...params} row={params.row} creator={true} />
    ),
    sortable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <ProjectActions {...params} row={params.row} />,
    headerAlign: "center",
  },
];

const descriptionColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    headerAlign: "center",
  },

  {
    field: "createdAt",
    headerName: "Created At",
    width: 160,
    renderCell: (params) => formatDate(params.row.createdAt),
    headerAlign: "center",
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 160,
    renderCell: (params) => formatDate(params.row.updatedAt),
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    headerAlign: "center",
    renderCell: (params) => <DescriptionActions {...params} row={params.row} />,
  },
];

const skillColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    headerAlign: "center",
  },
  {
    field: "scale",
    headerName: "Scale",
    width: 130,
    headerAlign: "center",
    renderCell: (params) => (
      <div className="flex p-2">
        <div
          className={`border-2 rounded-xl px-2 py-1 w-[100px] text-center text-white ${
            params.row.scale === "Basic"
              ? " bg-amber-500"
              : params.row.scale === "Intermediate"
              ? " bg-indigo-500"
              : " bg-green-500"
          }`}
        >
          {params.row.scale}
        </div>
      </div>
    ),
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 160,
    headerAlign: "center",
    renderCell: (params) => formatDate(params.row.createdAt),
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 160,
    headerAlign: "center",
    renderCell: (params) => formatDate(params.row.updatedAt),
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    headerAlign: "center",
    renderCell: (params) => <SkillActions {...params} row={params.row} />,
  },
];

const levelColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    headerAlign: "center",
  },
  {
    field: "icon",
    headerName: "Icon",
    headerAlign: "center",
    width: 170,
  },
  {
    field: "user",
    headerName: "Added By",
    width: 130,
    headerAlign: "center",
    renderCell: (params) => <AvatarProfile {...params} row={params.row} />,
    sortable: false,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    renderCell: (params) => formatDate(params.row.createdAt),
    headerAlign: "center",
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 150,
    renderCell: (params) => formatDate(params.row.updatedAt),
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    renderCell: (params) => <LevelActions {...params} row={params.row} />,
    headerAlign: "center",
    width: 150,
  },
];

const socialColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "link",
    headerName: "Link",
    width: 300,
    headerAlign: "center",
  },
  {
    field: "icon",
    headerName: "Icon",
    width: 170,
    headerAlign: "center",
  },
  {
    field: "user",
    headerName: "Added By",
    width: 130,
    headerAlign: "center",
    renderCell: (params) => <AvatarProfile {...params} row={params.row} />,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    renderCell: (params) => formatDate(params.row.createdAt),
    headerAlign: "center",
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 150,
    renderCell: (params) => formatDate(params.row.updatedAt),
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <SocialActions {...params} row={params.row} />,
    headerAlign: "center",
  },
];

const serviceColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    headerAlign: "center",
  },
  {
    field: "icon",
    headerName: "Icon",
    width: 170,
    headerAlign: "center",
  },
  {
    field: "user",
    headerName: "Added By",
    width: 130,
    headerAlign: "center",
    renderCell: (params) => <AvatarProfile {...params} row={params.row} />,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    renderCell: (params) => formatDate(params.row.createdAt),
    headerAlign: "center",
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 150,
    renderCell: (params) => formatDate(params.row.updatedAt),
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <ServiceActions {...params} row={params.row} />,
    headerAlign: "center",
  },
];

const mailColumns = [
  {
    field: "_id",
    hideable: false,
    width: 200,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 170,
    headerAlign: "center",
  },
  {
    field: "message",
    headerName: "Message",
    width: 300,
    headerAlign: "center",
  },
  {
    field: "state",
    headerName: "State",
    width: 160,
    headerAlign: "center",
    renderCell: (params) => <MailState {...params} row={params.row} />,
  },
  {
    field: "potential",
    headerName: "Type",
    width: 160,
    headerAlign: "center",
    renderCell: (params) => <MailPotential {...params} row={params.row} />,
  },

  {
    field: "createdAt",
    headerName: "Received",
    width: 150,
    renderCell: (params) => formatDate(params.row.createdAt),
    headerAlign: "center",
  },
];
export {
  educationColumns,
  curriculumColumns,
  experienceColumns,
  technologiesColumns,
  taskColumns,
  projectColumns,
  descriptionColumns,
  skillColumns,
  levelColumns,
  socialColumns,
  serviceColumns,
  mailColumns,
};
