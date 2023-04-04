import { useState, useEffect, createContext } from "react";
import clientAxios from "@/config/clientAxios";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const QualificationContext = createContext();

const QualificationProvider = ({ children }) => {
  const [educations, setEducations] = useState([]);
  const [education, setEducation] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState({});
  const [dialogEducation, setDialogEducation] = useState(false);
  const [dialogExperience, setDialogExperience] = useState(false);
  const [dialogDeleteEducation, setDialogDeleteEducation] = useState(false);
  const [dialogDeleteExperience, setDialogDeleteExperience] = useState(false);
  const [loader, setLoader] = useState(true);

  const cookies = new Cookies();
  useEffect(() => {
    const userEducation = async () => {
      setLoader(true);
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
        const { data } = await clientAxios("/educations", config);
        setEducations(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    const userExperience = async () => {
      setLoader(true);
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
        const { data } = await clientAxios("/works", config);
        setExperiences(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    userEducation();
    userExperience();
  }, []);

  const handleDialogFormEducation = () => {
    setDialogEducation(!dialogEducation);
    setEducation({});
  };

  const submitEducation = async (education) => {
    if (education?.id) {
      await editEducation(education);
    } else {
      await createEducation(education);
    }
  };

  const createEducation = async (educationObject) => {
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
        "/educations",
        educationObject,
        config
      );

      setEducations([...educations, data]);
      setDialogEducation(false);
    } catch (error) {}
  };

  const editEducation = async (educationObject) => {
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
        `/educations/${educationObject.id}`,
        educationObject,
        config
      );

      const educationsUpdated = educations.map((educationState) =>
        educationState._id === data._id ? data : educationState
      );
      setEducations(educationsUpdated);
      setDialogEducation(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditEducation = (educationObject) => {
    setEducation(educationObject);
    setDialogEducation(true);
  };

  const handleDeleteEducation = (educationObject) => {
    setEducation(educationObject);
    setDialogDeleteEducation(!dialogDeleteEducation);
  };

  const deleteEducation = async () => {
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
        `/educations/${education._id}`,
        config
      );
      toast.success(data.msg);
      const educationsUpdated = educations.filter(
        (educationState) => educationState._id !== education._id
      );
      setEducations(educationsUpdated);
      setDialogDeleteEducation(false);
      setEducation({});
    } catch (error) {
      console.log(error);
    }
  };

  //experience

  const handleDialogFormExperience = () => {
    setDialogExperience(!dialogExperience);
    setExperience({});
  };

  const submitExperience = async (experience) => {
    if (experience?.id) {
      await editExperience(experience);
    } else {
      await createExperience(experience);
    }
  };

  const createExperience = async (experienceObject) => {
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
        "/works",
        experienceObject,
        config
      );

      setExperiences([...experiences, data]);
      setDialogExperience(false);
    } catch (error) {}
  };

  const editExperience = async (experienceObject) => {
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
        `/works/${experienceObject.id}`,
        experienceObject,
        config
      );

      const experiencesUpdated = experiences.map((experienceState) =>
        experienceState._id === data._id ? data : experienceState
      );
      setExperiences(experiencesUpdated);
      setDialogExperience(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditExperience = (experienceObject) => {
    setExperience(experienceObject);
    setDialogExperience(true);
  };

  const handleDeleteExperience = (experienceObject) => {
    setExperience(experienceObject);
    setDialogDeleteExperience(!dialogDeleteExperience);
  };

  const deleteExperience = async () => {
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
        `/works/${experience._id}`,
        config
      );
      toast.success(data.msg);
      const experiencesUpdated = experiences.filter(
        (experienceState) => experienceState._id !== experience._id
      );
      setExperiences(experiencesUpdated);
      setDialogDeleteExperience(false);
      setExperience({});
    } catch (error) {
      console.log(error);
    }
  };

  const logoutQualification = () => {
    setEducations([]);
    setEducation({});
    setExperiences([]);
    setExperience({});
  };

  return (
    <QualificationContext.Provider
      value={{
        educations,
        experiences,
        education,
        experience,
        handleDialogFormEducation,
        handleDialogFormExperience,
        dialogEducation,
        dialogExperience,
        submitEducation,
        submitExperience,
        handleEditEducation,
        handleEditExperience,
        handleDeleteEducation,
        handleDeleteExperience,
        dialogDeleteEducation,
        dialogDeleteExperience,
        deleteEducation,
        deleteExperience,
        logoutQualification,
        loader,
      }}
    >
      {children}
    </QualificationContext.Provider>
  );
};

export { QualificationProvider };

export default QualificationContext;
