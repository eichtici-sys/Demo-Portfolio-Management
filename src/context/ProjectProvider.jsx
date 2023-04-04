import { useState, useEffect, createContext } from "react";
import clientAxios from "@/config/clientAxios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState({});
  const [technology, setTechnology] = useState({});
  const [task, setTask] = useState({});
  const [dialogFormProject, setDialogFormProject] = useState(false);
  const [dialogFormTechnology, setDialogFormTechnology] = useState(false);
  const [dialogFormTask, setDialogFormTask] = useState(false);
  const [dialogViewTask, setDialogViewTask] = useState(false);
  const [dialogDeleteProject, setDialogDeleteProject] = useState(false);
  const [dialogDeleteTechnology, setDialogDeleteTechnology] = useState(false);
  const [dialogDeleteTask, setDialogDeleteTask] = useState(false);
  const [loadP, setLoadP] = useState(true);

  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const userProjects = async () => {
      setLoadP(true);
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await clientAxios("/projects", config);
        setProjects(data);
        setLoadP(false);
      } catch (error) {
        console.log(error);
      }
      setLoadP(false);
    };
    userProjects();
  }, []);

  const handleDialogProject = () => {
    setDialogFormProject(!dialogFormProject);
    setProject({});
  };

  const submitProject = async (project) => {
    if (project?.id) {
      await editProject(project);
    } else {
      await createProject(project);
    }
  };

  const createProject = async (project) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const formData = new FormData();
      formData.append("Image", project.infoImage);
      formData.append("name", project.name);
      formData.append("description", project.description);
      formData.append("url", project.url);
      formData.append("repository", project.repository);
      formData.append("state", project.state);
      formData.append("phase", project.phase);
      formData.append("priority", project.priority);
      formData.append("featured", project.featured);
      const { data } = await clientAxios.post("/projects", formData, config);

      setProjects([...projects, data]);
      setDialogFormProject(false);
    } catch (error) {}
  };

  const editProject = async (project) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const formData = new FormData();
      formData.append("id", project.id);
      formData.append("Image", project.infoImage);
      formData.append("name", project.name);
      formData.append("description", project.description);
      formData.append("url", project.url);
      formData.append("repository", project.repository);
      formData.append("state", project.state);
      formData.append("phase", project.phase);
      formData.append("priority", project.priority);
      formData.append("featured", project.featured);

      const { data } = await clientAxios.put(
        `/projects/${project.id}`,
        formData,
        config
      );

      const projectsUpdated = projects.map((projectState) =>
        projectState._id === data._id ? data : projectState
      );
      setProjects(projectsUpdated);
      toast.success("Project updated Successfully");
      setDialogFormProject(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProject = (project) => {
    setProject(project);
    setDialogFormProject(true);
  };

  const handleDeleteProject = (project) => {
    setProject(project);
    setDialogDeleteProject(!dialogDeleteProject);
  };
  const handlePreviewProject = (project) => {
    // setProject(project);
    router.push(`/admin/projects/${project._id}`);
  };

  const deleteProject = async () => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios.delete(
        `/projects/${project._id}`,
        config
      );
      toast.success(data.msg);

      const projectsUpdated = projects.filter(
        (projectState) => projectState._id !== project._id
      );
      setProjects(projectsUpdated);
      setDialogDeleteProject(false);
      setProject({});
    } catch (error) {
      console.log(error);
    }
  };

  const getProjectById = async (id) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios(`/projects/${id}`, config);
      setProject(data);
    } catch (error) {
      console.log(error);
    }
  };
  //Technologies
  const handleDialogTechnology = () => {
    setDialogFormTechnology(!dialogFormTechnology);
    setTechnology({});
  };

  const submitTechnology = async (technology) => {
    if (technology?.id) {
      await editTechnology(technology);
    } else {
      await createTechnology(technology);
    }
  };

  const createTechnology = async (technology) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios.post(
        "/technologies",
        technology,
        config
      );

      setTechnologies([...technologies, data]);
      setDialogFormTechnology(false);
    } catch (error) {}
  };

  const editTechnology = async (technology) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios.put(
        `/technologies/${technology.id}`,
        technology,
        config
      );
      const projectUpdated = { ...project };
      projectUpdated.technologies = projectUpdated.technologies.map(
        (technologyState) =>
          technologyState._id === data._id ? data : technologyState
      );
      setProject(projectUpdated);
      setDialogFormTechnology(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditTechnology = (technology) => {
    setTechnology(technology);
    setDialogFormTechnology(true);
  };
  const handleDeleteTechnology = (technology) => {
    setTechnology(technology);
    setDialogDeleteTechnology(!dialogDeleteTechnology);
  };
  const deleteTecnology = async () => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios.delete(
        `/technologies/${technology._id}`,
        config
      );
      toast.success(data.msg);
      const projectUpdated = { ...project };
      projectUpdated.technologies = projectUpdated.technologies.filter(
        (technologyState) => technologyState._id !== technology._id
      );

      setProject(projectUpdated);
      setDialogDeleteTechnology(false);
      setTechnology({});
    } catch (error) {
      console.log(error);
    }
  };

  //Tasks

  const handleDialogTask = () => {
    setDialogFormTask(!dialogFormTask);
    setTask({});
  };

  const submitTask = async (task) => {
    if (task?.id) {
      await editTask(task);
    } else {
      await createTask(task);
    }
  };

  const createTask = async (task) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios.post("/tasks", task, config);

      setTasks([...tasks, data]);
      setDialogFormTask(false);
    } catch (error) {}
  };

  const editTask = async (task) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios.put(`/tasks/${task.id}`, task, config);
      const projectUpdated = { ...project };
      projectUpdated.tasks = projectUpdated.tasks.map((taskState) =>
        taskState._id === data._id ? data : taskState
      );
      setProject(projectUpdated);
      setDialogFormTask(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditTask = (task) => {
    setTask(task);
    setDialogFormTask(true);
  };
  const handleDeleteTask = (task) => {
    setTask(task);
    setDialogDeleteTask(!dialogDeleteTask);
  };
  const deleteTask = async () => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios.delete(`/tasks/${task._id}`, config);
      toast.success(data.msg);
      const projectUpdated = { ...project };
      projectUpdated.tasks = projectUpdated.tasks.filter(
        (taskState) => taskState._id !== task._id
      );

      setProject(projectUpdated);
      setDialogDeleteTask(false);
      setTask({});
    } catch (error) {
      console.log(error);
    }
  };

  const changeState = async (id) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clientAxios.post(`/tasks/state/${id}`, {}, config);
      const projectUpdated = { ...project };
      projectUpdated.tasks = projectUpdated.tasks.map((taskState) =>
        taskState._id == data._id ? data : taskState
      );
      setProject(projectUpdated);
      setTask({});
    } catch (error) {}
  };
  const handleViewTask = (task) => {
    setTask(task);
    setDialogViewTask(!dialogViewTask);
  };
  const logoutProject = () => {
    setProjects([]);
    setProject({});
    setTechnologies([]);
    setTechnology({});
    setTasks([]);
    setTask({});
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        technologies,
        tasks,
        project,
        technology,
        task,
        handleDialogProject,
        handleDialogTechnology,
        handleDialogTask,
        dialogFormProject,
        dialogFormTechnology,
        dialogFormTask,
        dialogDeleteProject,
        dialogDeleteTechnology,
        dialogDeleteTask,
        submitProject,
        submitTechnology,
        submitTask,
        handleEditProject,
        handleEditTechnology,
        handleEditTask,
        handleDeleteProject,
        handleDeleteTechnology,
        handleDeleteTask,
        deleteProject,
        deleteTecnology,
        deleteTask,
        handlePreviewProject,
        getProjectById,
        changeState,
        handleViewTask,
        dialogViewTask,
        logoutProject,
        loadP,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };

export default ProjectContext;
