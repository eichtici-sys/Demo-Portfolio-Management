import useProject from "@/hooks/useProject";
import useProfile from "@/hooks/useProfile";
import { useEffect, useState } from "react";
import {
  UilBriefcaseAlt,
  UilLayerGroup,
  UilFolderCheck,
} from "@iconscout/react-unicons";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const DashResumen = () => {
  const { projects } = useProject();
  const { totalSkills } = useProfile();
  const [skillsT, setSkillsT] = useState(0);
  const [dataStatus, setDataStatus] = useState([]);
  const [dataPhases, setDataPhases] = useState([]);
  const [dataPriority, setDataPriority] = useState([]);
  const [completed, setCompleted] = useState(0);

  const dataStatusProject = {
    labels: ["To Begin", "In progress", "Completed"],
    datasets: [
      {
        label: "#Projects",
        data: dataStatus,
        backgroundColor: ["#a0a0a0", "#1e1e1e", "#ff6801"],
        hoverOffset: 4,
      },
    ],
  };
  const dataPhasesProject = {
    labels: [
      "Initiation",
      "Briefing",
      "Planning",
      "Design",
      "Development",
      "Testing",
      "Deployment",
      "Closed",
    ],
    datasets: [
      {
        label: "#Projects",
        data: dataPhases,
        backgroundColor: [
          "#a0a0a0",
          "#1e1e1e",
          "#ff6801",
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const dataPriorityProject = {
    labels: ["High", "Normal", "Low"],
    datasets: [
      {
        label: "#Projects",
        data: dataPriority,
        backgroundColor: ["#a0a0a0", "#1e1e1e", "#ff6801"],
        hoverOffset: 4,
      },
    ],
  };

  let delayed;
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      title: {
        display: false,
        text: "Projects by Phases",
      },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  };

  useEffect(() => {
    const totalUserStack = () => {
      const arraySkills = [...totalSkills];
      const total = arraySkills.map((item) => {
        return item.skills.length;
      });
      const sumTotal = total.reduce((a, b) => a + b, 0);
      setSkillsT(sumTotal);
    };

    const projectsStatus = () => {
      const projectsArray = [...projects];
      const completedP = projectsArray.filter(
        (project) => project.state == "Completed"
      );
      const inProgressP = projectsArray.filter(
        (project) => project.state == "In progress"
      );
      const toBeginP = projectsArray.filter(
        (project) => project.state == "To Begin"
      );
      const totalInProgress = Number(inProgressP.length);
      const totalToBegin = Number(toBeginP.length);
      const totalCompleted = Number(completedP.length);
      setCompleted(totalCompleted);
      setDataStatus([totalToBegin, totalInProgress, totalCompleted]);
    };

    const projectsPhases = () => {
      const projectsArray = [...projects];
      const initiationP = projectsArray.filter(
        (project) => project.phase === "Initiation"
      );
      const briefingP = projectsArray.filter(
        (project) => project.phase === "Briefing"
      );
      const planningP = projectsArray.filter(
        (project) => project.phase === "Planning"
      );
      const designP = projectsArray.filter(
        (project) => project.phase === "Design"
      );
      const developmentP = projectsArray.filter(
        (project) => project.phase === "Development"
      );
      const testingP = projectsArray.filter(
        (project) => project.phase === "Testing"
      );
      const deploymentP = projectsArray.filter(
        (project) => project.phase === "Deployment"
      );
      const closedP = projectsArray.filter(
        (project) => project.phase === "Closed"
      );

      const totalInitiation = Number(initiationP.length);
      const totalBriefing = Number(briefingP.length);
      const totalPlanning = Number(planningP.length);
      const totalDesign = Number(designP.length);
      const totalDevelopment = Number(developmentP.length);
      const totalTesting = Number(testingP.length);
      const totalDeployment = Number(deploymentP.length);
      const totalClosed = Number(closedP.length);

      setDataPhases([
        totalInitiation,
        totalBriefing,
        totalPlanning,
        totalDesign,
        totalDevelopment,
        totalTesting,
        totalDeployment,
        totalClosed,
      ]);
    };

    const projectsPriority = () => {
      const projectsArray = [...projects];
      const highP = projectsArray.filter(
        (project) => project.priority == "High"
      );
      const normalP = projectsArray.filter(
        (project) => project.priority == "Normal"
      );
      const lowP = projectsArray.filter((project) => project.priority == "Low");
      const totalHigh = Number(highP.length);
      const totalNormal = Number(normalP.length);
      const totalLow = Number(lowP.length);
      setDataPriority([totalHigh, totalNormal, totalLow]);
    };

    totalUserStack();
    projectsStatus();
    projectsPhases();
    projectsPriority();
  }, [totalSkills, projects]);
  return (
    <>
      <div className="md:shadow-boxSidebar md:py-2 md:px-4 rounded-lg">
        <div className="py-3 lg:text-base text-sm"> You currently have:</div>
        <div className="grid grid-cols-1 xm:grid-cols-2 lg:grid-cols-3 gap-3 py-3">
          <div className="border-2 flex items-center rounded-xl shadow-md select-none">
            <div className="bg-gradient-to-br from-primary1 to-primary2 text-white h-full flex justify-center items-center px-3 rounded-l-xl">
              <UilBriefcaseAlt className="w-8 h-8" />
            </div>
            <div className="flex flex-col px-3 py-2">
              <span className="text-3xl font-bold">{projects.length}</span>
              <span className="text-sm">Added Projects</span>
            </div>
          </div>
          <div className="border-2 flex items-center rounded-xl shadow-md select-none">
            <div className="bg-gradient-to-br from-primary1 to-primary2 text-white h-full flex justify-center items-center px-3 rounded-l-xl">
              <UilLayerGroup className="w-8 h-8" />
            </div>
            <div className="flex flex-col px-3 py-2">
              <span className="text-3xl font-bold">{skillsT}</span>
              <span className="text-sm">Technologies in your stack</span>
            </div>
          </div>
          <div className="border-2 flex items-center rounded-xl shadow-md select-none">
            <div className="bg-gradient-to-br from-primary1 to-primary2 text-white h-full flex justify-center items-center px-3 rounded-l-xl">
              <UilFolderCheck className="w-8 h-8" />
            </div>
            <div className="flex flex-col px-3 py-2">
              <span className="text-3xl font-bold">{completed}</span>
              <span className="text-sm">Completed Projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        {projects.length > 0 && (
          <div className="md:shadow-boxSidebar md:py-2 py-2 md:px-4 px-2 rounded-lg">
            <span className="font-bold text-darkText md:text-base text-sm">
              Projects by Progress
            </span>
            <div className="w-full md:p-4">
              <Doughnut data={dataStatusProject} />
            </div>
          </div>
        )}

        {projects.length > 0 && (
          <div className="md:shadow-boxSidebar md:py-2 py-2 md:px-4 px-2 rounded-lg">
            <span className="font-bold text-darkText">
              Projects by Priority
            </span>
            <div className="w-full p-4">
              <PolarArea data={dataPriorityProject} />
            </div>
          </div>
        )}
      </div>
      {projects.length > 0 && (
        <div className="py-3 mt-5 md:shadow-boxSidebar md:px-4 px-2 rounded-lg">
          <span className="font-bold text-darkText">Projects by Phases</span>
          <div className="w-full md:py-4 py-2 md:px-4">
            <Bar data={dataPhasesProject} options={options} />
          </div>
        </div>
      )}
    </>
  );
};

export default DashResumen;
