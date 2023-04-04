import { useState, useEffect, createContext } from "react";
import clientAxios from "@/config/clientAxios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [about, setAbout] = useState({});
  const [levels, setLevels] = useState([]);
  const [mails, setMails] = useState([]);
  const [skills, setSkills] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [level, setLevel] = useState({});
  const [skill, setSkill] = useState({});
  const [curriculum, setCurriculum] = useState({});
  const [socials, setSocials] = useState([]);
  const [social, setSocial] = useState({});
  const [nameFileCV, setNameFileCV] = useState("");
  const [dialogFormLevel, setDialogFormLevel] = useState(false);
  const [dialogFormSkill, setDialogFormSkill] = useState(false);
  const [dialogFormSocial, setDialogFormSocial] = useState(false);
  const [dialogFormCurriculum, setDialogFormCurriculum] = useState(false);
  const [dialogDeleteLevel, setDialogDeleteLevel] = useState(false);
  const [dialogDeleteSkill, setDialogDeleteSkill] = useState(false);
  const [dialogDeleteSocial, setDialogDeleteSocial] = useState(false);
  const [dialogDeleteCurriculum, setDialogDeleteCurriculum] = useState(false);
  const [dialogChangeImagePresentation, setDialogChangeImagePresentation] =
    useState(false);
  const [dialogChangeImageAbout, setDialogChangeImageAbout] = useState(false);
  const [dialogChangeImageResumen, setDialogChangeImageResumen] =
    useState(false);
  const [dialogChangeImageBackground, setDialogChangeImageBackground] =
    useState(false);
  const [totalSkills, setTotalSkills] = useState([]);
  const [urlDown, setUrlDown] = useState("");
  const [loader, setLoader] = useState(true);
  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const userProfile = async () => {
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
        const { data } = await clientAxios("/profile", config);
        setProfile(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    const userLevels = async () => {
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
        const { data } = await clientAxios("/levels", config);
        setLevels(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    const userTotalSkills = async () => {
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
        const { data } = await clientAxios("/levels/total-skills", config);
        setTotalSkills(data);
      } catch (error) {
        console.log(error);
      }
    };
    const userSocials = async () => {
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
        const { data } = await clientAxios("/socials", config);
        setSocials(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    const userCurriculums = async () => {
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
        const { data } = await clientAxios("/cvs", config);
        setCurriculums(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    const userMails = async () => {
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
        const { data } = await clientAxios("/mails", config);
        setMails(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    const userAbout = async () => {
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
        const { data } = await clientAxios("/abouts", config);
        setAbout(data);
      } catch (error) {
        console.log(error);
      }
    };

    userProfile();
    userAbout();
    userMails();
    userLevels();
    userSocials();
    userTotalSkills();
    userCurriculums();
  }, []);

  const editProfile = async (dataProfile) => {
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
      formData.append("Image", dataProfile.imageUp);
      formData.append("id", dataProfile.id);
      formData.append("name", dataProfile.name);
      formData.append("lastname", dataProfile.lastname);
      formData.append("birthday", dataProfile.birthday);
      formData.append("gender", dataProfile.gender);
      formData.append("phone", dataProfile.phone);
      formData.append("email", dataProfile.email);
      formData.append("address", dataProfile.address);
      formData.append("numberAd", dataProfile.numberAd);
      formData.append("city", dataProfile.city);
      const { data } = await clientAxios.put(
        `/profile/${dataProfile.id}`,
        formData,
        config
      );
      setProfile(data);
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalLevel = () => {
    setDialogFormLevel(!dialogFormLevel);
    setLevel({});
  };

  const submitLevel = async (level) => {
    if (level?.id) {
      await editLevel(level);
    } else {
      await createLevel(level);
    }
  };

  const getLevelById = async (id) => {
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

      const { data } = await clientAxios(`/levels/${id}`, config);
      setLevel(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createLevel = async (levelObject) => {
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

      const { data } = await clientAxios.post("/levels", levelObject, config);

      setLevels([...levels, data]);
      setDialogFormLevel(false);
    } catch (error) {}
  };

  const editLevel = async (levelObject) => {
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
        `/levels/${levelObject.id}`,
        levelObject,
        config
      );

      const levelsUpdated = levels.map((levelState) =>
        levelState._id === data._id ? data : levelState
      );
      setLevels(levelsUpdated);
      setDialogFormLevel(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditLevel = (levelObject) => {
    setLevel(levelObject);
    setDialogFormLevel(true);
  };

  const handleDeleteLevel = (levelObject) => {
    setLevel(levelObject);
    setDialogDeleteLevel(!dialogDeleteLevel);
  };

  const handlePreviewLevel = (levelObject) => {
    setLevel(levelObject);
    return;
    router.push(`/admin/skills/${levelObject._id}`);
  };

  const deleteLevel = async () => {
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

      const { data } = await clientAxios.delete(`/levels/${level._id}`, config);
      toast.success(data.msg);
      const levelsUpdated = levels.filter(
        (levelState) => levelState._id !== level._id
      );
      setLevels(levelsUpdated);
      setDialogDeleteLevel(false);
      setLevel({});
    } catch (error) {
      console.log(error);
    }
  };

  //skills
  const handleDialogSkills = () => {
    setDialogFormSkill(!dialogFormSkill);
    setSkill({});
  };

  const submitSkill = async (skill) => {
    if (skill?.id) {
      await editSkill(skill);
    } else {
      await addSkill(skill);
    }
  };

  const addSkill = async (skillObject) => {
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

      const { data } = await clientAxios.post("/skills", skillObject, config);

      setSkills([...skills, data]);
      setDialogFormSkill(false);
    } catch (error) {}
  };

  const editSkill = async (skillObject) => {
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
        `/skills/${skillObject.id}`,
        skillObject,
        config
      );
      const levelUpdated = { ...level };
      levelUpdated.skills = levelUpdated.skills.map((skillState) =>
        skillState._id === data._id ? data : skillState
      );
      setLevel(levelUpdated);
      setDialogFormSkill(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditSkill = (skillObject) => {
    setSkill(skillObject);
    setDialogFormSkill(true);
  };
  const handleDeleteSkill = (skillObject) => {
    setSkill(skillObject);
    setDialogDeleteSkill(!dialogDeleteSkill);
  };
  const deleteSkill = async () => {
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

      const { data } = await clientAxios.delete(`/skills/${skill._id}`, config);
      toast.success(data.msg);
      const levelUpdated = { ...level };
      levelUpdated.skills = levelUpdated.skills.filter(
        (skillState) => skillState._id !== skill._id
      );

      setLevel(levelUpdated);
      setDialogDeleteSkill(false);
      setSkill({});
    } catch (error) {
      console.log(error);
    }
  };

  //Socials
  const handleDialogSocials = () => {
    setDialogFormSocial(!dialogFormSocial);
    setSocial({});
  };
  const submitSocial = async (social) => {
    if (social?.id) {
      await editSocial(social);
    } else {
      await createSocial(social);
    }
  };
  const createSocial = async (social) => {
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

      const { data } = await clientAxios.post("/socials", social, config);

      setSocials([...socials, data]);
      setDialogFormSocial(false);
    } catch (error) {}
  };
  const editSocial = async (social) => {
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
        `/socials/${social.id}`,
        social,
        config
      );

      const socialsUpdated = socials.map((socialState) =>
        socialState._id === data._id ? data : socialState
      );
      setSocials(socialsUpdated);
      setDialogFormSocial(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSocial = (social) => {
    setSocial(social);
    setDialogFormSocial(true);
  };

  const handleDeleteSocial = (social) => {
    setSocial(social);
    setDialogDeleteSocial(!dialogDeleteSocial);
  };

  const deleteSocial = async () => {
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
        `/socials/${social._id}`,
        config
      );
      toast.success(data.msg);
      const socialsUpdated = socials.filter(
        (socialState) => socialState._id !== social._id
      );
      setSocials(socialsUpdated);
      setDialogDeleteSocial(false);
      setSocial({});
    } catch (error) {
      console.log(error);
    }
  };

  //CV
  const handleDialogCV = () => {
    setDialogFormCurriculum(!dialogFormCurriculum);
    setNameFileCV("");
    setCurriculum({});
  };

  const createCV = async (cv) => {
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
      formData.append("Image", cv.infoFile);
      formData.append("name", cv.name);
      formData.append("dataPreview", cv.dataPreview);
      formData.append("description", cv.description);

      const { data } = await clientAxios.post("/cvs", formData, config);
      setCurriculums([...curriculums, data]);
      setDialogFormCurriculum(false);
    } catch (error) {}
  };

  const handleDeleteCV = (cv) => {
    setCurriculum(cv);
    setDialogDeleteCurriculum(!dialogDeleteCurriculum);
  };

  const deleteCV = async () => {
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
        `/cvs/${curriculum._id}`,
        config
      );
      toast.success(data.msg);
      const cvsUpdated = curriculums.filter(
        (cvState) => cvState._id !== curriculum._id
      );
      setCurriculums(cvsUpdated);
      setDialogDeleteCurriculum(false);
      setCurriculum({});
    } catch (error) {
      console.log(error);
    }
  };
  const changeVisibility = async (id) => {
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

      const { data } = await clientAxios.post(`/cvs/state/${id}`, {}, config);

      const cvsUpdated = curriculums.map((cvState) =>
        cvState._id == data._id ? data : cvState
      );
      setCurriculums(cvsUpdated);
      toast.success("Visibility of CV updated Successfully");
    } catch (error) {}
  };
  const handlePreviewCV = (cv) => {
    setCurriculum(cv);
    router.push(`/admin/curriculum/${cv._id}`);
  };

  const downloadCV = async (id) => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      };
      const { data } = await clientAxios.get(`/cvs/download/${id}`, config);
      const blob = new Blob([data], { type: "application/pdf" });
      saveAs(blob, "ejemplo.pdf");
    } catch (error) {}
  };

  const getCVById = async (id) => {
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
      const { data } = await clientAxios(`/cvs/${id}`, config);
      setCurriculum(data);
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

      const { data } = await clientAxios.post(`/mails/state/${id}`, {}, config);
      const emailsUpdated = mails.map((mailState) =>
        mailState._id == data._id ? data : mailState
      );
      setMails(emailsUpdated);
      toast.success("State of Mail updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const changePotential = async (id) => {
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
        `/mails/potential/${id}`,
        {},
        config
      );
      const emailsUpdated = mails.map((mailPotential) =>
        mailPotential._id == data._id ? data : mailPotential
      );
      setMails(emailsUpdated);
      toast.success("Potential of Mail updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  //Abouts
  const editAboutInfo = async (info) => {
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
        `/abouts/${info.id}`,
        info,
        config
      );
      setAbout(data);
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const changeImagePresentation = async (imgPresentation) => {
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
      formData.append("id", imgPresentation.id);
      formData.append("Image", imgPresentation.infoImagePresentation);

      const { data } = await clientAxios.put(
        `/abouts/imgpres/${imgPresentation.id}`,
        formData,
        config
      );
      setAbout(data);
      toast.success("Image Presentation Updated Successfully");
      setDialogChangeImagePresentation(false);
    } catch (error) {}
  };

  const handleChangeImagePresentation = (aboutInfo) => {
    setAbout(aboutInfo);
    setDialogChangeImagePresentation(!dialogChangeImagePresentation);
  };

  const changeImageAbout = async (infoAbout) => {
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
      formData.append("id", infoAbout.id);
      formData.append("Image", infoAbout.infoImageAbout);

      const { data } = await clientAxios.put(
        `/abouts/image-about/${infoAbout.id}`,
        formData,
        config
      );
      setAbout(data);
      toast.success("Image About Updated Successfully");
      setDialogChangeImageAbout(false);
    } catch (error) {}
  };

  const handleChangeImageAbout = (aboutInfo) => {
    setAbout(aboutInfo);
    setDialogChangeImageAbout(!dialogChangeImageAbout);
  };

  const changeImageResumen = async (infoAbout) => {
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
      formData.append("id", infoAbout.id);
      formData.append("Image", infoAbout.infoImageResumen);

      const { data } = await clientAxios.put(
        `/abouts/image-resumen/${infoAbout.id}`,
        formData,
        config
      );
      setAbout(data);
      toast.success("Image Resumen Updated Successfully");
      setDialogChangeImageResumen(false);
    } catch (error) {}
  };
  const handleChangeImageResumen = (aboutInfo) => {
    setAbout(aboutInfo);
    setDialogChangeImageResumen(!dialogChangeImageResumen);
  };

  const changeImageBackground = async (infoAbout) => {
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
      formData.append("id", infoAbout.id);
      formData.append("Image", infoAbout.infoImageBackground);

      const { data } = await clientAxios.put(
        `/abouts/image-background/${infoAbout.id}`,
        formData,
        config
      );
      setAbout(data);
      toast.success("Image Background Updated Successfully");
      setDialogChangeImageBackground(false);
    } catch (error) {}
  };
  const handleChangeImageBackground = (aboutInfo) => {
    setAbout(aboutInfo);
    setDialogChangeImageBackground(!dialogChangeImageBackground);
  };
  const logoutProfile = () => {
    setMails([]);
    setProfile({});
    setAbout({});
    setLevels([]);
    setLevel({});
    setSkills([]);
    setSkill({});
    setCurriculums([]);
    setCurriculum({});
    setSocials([]);
    setSocial({});
    setTotalSkills([]);
    setNameFileCV("");
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        levels,
        editProfile,
        dialogFormLevel,
        dialogFormSkill,
        handleModalLevel,
        submitLevel,
        handleEditLevel,
        level,
        dialogDeleteLevel,
        handleDeleteLevel,
        deleteLevel,
        handlePreviewLevel,
        getLevelById,
        setLevel,
        handleDialogSkills,
        submitSkill,
        skill,
        skills,
        handleEditSkill,
        dialogDeleteSkill,
        handleDeleteSkill,
        deleteSkill,
        socials,
        social,
        handleDialogSocials,
        dialogFormSocial,
        submitSocial,
        handleEditSocial,
        handleDeleteSocial,
        dialogDeleteSocial,
        deleteSocial,
        totalSkills,
        curriculums,
        curriculum,
        handleDialogCV,
        dialogFormCurriculum,
        createCV,
        handleDeleteCV,
        dialogDeleteCurriculum,
        deleteCV,
        changeVisibility,
        downloadCV,
        handlePreviewCV,
        urlDown,
        setUrlDown,
        logoutProfile,
        getCVById,
        nameFileCV,
        setNameFileCV,
        mails,
        changeState,
        changePotential,
        about,
        editAboutInfo,
        changeImagePresentation,
        handleChangeImagePresentation,
        dialogChangeImagePresentation,
        changeImageAbout,
        handleChangeImageAbout,
        dialogChangeImageAbout,
        dialogChangeImageResumen,
        handleChangeImageResumen,
        changeImageResumen,
        changeImageBackground,
        handleChangeImageBackground,
        dialogChangeImageBackground,
        loader,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider };
export default ProfileContext;
