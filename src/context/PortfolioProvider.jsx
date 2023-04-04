import { useState, useEffect, createContext } from "react";
import clientAxios from "@/config/clientAxios";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [isDarkToggle, setIsDarkToggle] = useState(false);
  const [profile, setProfile] = useState({});
  const [about, setAbout] = useState({});
  const [totalYears, setTotalYears] = useState(2020);
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [totalProjectsCompleted, setTotalProjectsCompleted] = useState(0);
  const [educations, setEducations] = useState([]);
  const [socials, setSocials] = useState([]);
  const [levels, setLevels] = useState([]);
  const [works, setWorks] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [lastProjectsFeatured, setLastProjectsFeatured] = useState([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      setIsDarkToggle(true);
    } else {
      setTheme("light");
      setIsDarkToggle(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage) {
      const themeStorage = localStorage.getItem("theme");
      if (themeStorage) {
        setTheme(themeStorage);
        setIsDarkToggle(themeStorage === "dark" ? true : false);
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkToggle(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkToggle(false);
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkToggle(!isDarkToggle);
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const landingContact = async () => {
      try {
        const { data } = await clientAxios("/profile/contact");
        setProfile(data);
      } catch (error) {
        console.log(error);
      }
    };

    const landingAbout = async () => {
      try {
        const { data } = await clientAxios("/abouts/all");
        setAbout(data);
      } catch (error) {
        console.log(error);
      }
    };
    const landingEducations = async () => {
      try {
        const { data } = await clientAxios("/educations/all");
        setEducations(data);
      } catch (error) {
        console.log(error);
      }
    };
    const landingLevels = async () => {
      try {
        const { data } = await clientAxios("/levels/all");

        setLevels(data);
      } catch (error) {
        console.log(error);
      }
    };
    const landingWorks = async () => {
      try {
        const { data } = await clientAxios("/works/all");
        const totalYearsWorks =
          Number(new Date().getFullYear()) - Number(data.firstWork.startYear);
        setTotalYears(totalYearsWorks);
        setTotalCompanies(data.works.length);
        setWorks(data.works);
      } catch (error) {
        console.log(error);
      }
    };

    const landingServices = async () => {
      try {
        const { data } = await clientAxios("/services/all");
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    const landingProjects = async () => {
      try {
        const { data } = await clientAxios("/projects/all");
        setTotalProjectsCompleted(data.length);
        const listProjects = [...data];
        const featureProjects = listProjects.filter(
          (project) => project.featured === "Featured"
        );
        const lastFeatured = featureProjects.slice(-6);
        setLastProjectsFeatured(lastFeatured.reverse());
        setProjects(data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    const landingSocials = async () => {
      try {
        const { data } = await clientAxios("/socials/all");
        setSocials(data);
      } catch (error) {}
    };
    landingAbout();
    landingContact();
    landingSocials();
    landingServices();
    landingEducations();
    landingLevels();
    landingWorks();
    landingProjects();
  }, []);

  const submitEmail = async (contact) => {
    try {
      const { data } = await clientAxios.post("/mails", contact);
      toast.success(data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const downloadLastCV = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/pdf",
        },
        responseType: "blob",
      };
      const { data } = await clientAxios("/cvs/last", config);

      const blob = new Blob([data], { type: "application/pdf" });
      saveAs(blob, `CV-${new Date().getFullYear().toString()}.pdf`);
      toast.loading("Downloading...", {
        duration: 1000,
      });
      setTimeout(() => {
        toast.success("CV downloaded successfully");
      }, 1000);
    } catch (error) {}
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        educations,
        levels,
        works,
        services,
        projects,
        lastProjectsFeatured,
        submitEmail,
        socials,
        downloadLastCV,
        totalYears,
        totalCompanies,
        totalProjectsCompleted,
        about,
        handleThemeSwitch,
        isDarkToggle,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider };

export default PortfolioContext;
