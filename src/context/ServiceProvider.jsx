import { useState, useEffect, createContext } from "react";
import clientAxios from "@/config/clientAxios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});
  const [descServices, setDescServices] = useState([]);
  const [descriptionS, setDescriptionS] = useState({});
  const [dialogService, setDialogService] = useState(false);
  const [dialogDeleteService, setDialogDeleteService] = useState(false);
  const [dialogFormDescriptions, setDialogFormDescription] = useState(false);
  const [dialogDeleteDescription, setDialogDeleteDescription] = useState(false);
  const [loader, setLoader] = useState(true);

  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const userServices = async () => {
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
        const { data } = await clientAxios("/services", config);
        setServices(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    userServices();
  }, []);

  const handleDialogService = () => {
    setDialogService(!dialogService);
    setService({});
  };

  const submitService = async (service) => {
    if (service?.id) {
      await editService(service);
    } else {
      await createService(service);
    }
  };
  const createService = async (serviceObject) => {
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
        "/services",
        serviceObject,
        config
      );

      setServices([...services, data]);
      setDialogService(false);
    } catch (error) {}
  };

  const editService = async (serviceObject) => {
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
        `/services/${serviceObject.id}`,
        serviceObject,
        config
      );

      const servicesUpdated = services.map((serviceState) =>
        serviceState._id === data._id ? data : serviceState
      );
      setServices(servicesUpdated);
      setDialogService(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditService = (serviceObject) => {
    setService(serviceObject);
    setDialogService(true);
  };

  const handleDeleteService = (serviceObject) => {
    setService(serviceObject);
    setDialogDeleteService(!dialogDeleteService);
  };

  const handlePreviewService = (serviceObject) => {
    setService(serviceObject);
    router.push(`/admin/works/${serviceObject._id}`);
  };

  const deleteService = async () => {
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
        `/services/${service._id}`,
        config
      );
      toast.success(data.msg);
      const servicesUpdated = services.filter(
        (serviceState) => serviceState._id !== service._id
      );
      setServices(servicesUpdated);
      setDialogDeleteService(false);
      setService({});
    } catch (error) {
      console.log(error);
    }
  };
  const getServiceById = async (id) => {
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

      const { data } = await clientAxios(`/services/${id}`, config);
      setService(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDialogDescriptions = () => {
    setDialogFormDescription(!dialogFormDescriptions);
    setDescriptionS({});
  };

  const submitDescription = async (desc) => {
    if (desc?.id) {
      await editDescription(desc);
    } else {
      await addDescription(desc);
    }
  };

  const addDescription = async (descObject) => {
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
        "/services-descriptions",
        descObject,
        config
      );

      setDescServices([...descServices, data]);
      setDialogFormDescription(false);
    } catch (error) {}
  };

  const editDescription = async (descObject) => {
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
        `/services-descriptions/${descObject.id}`,
        descObject,
        config
      );
      const serviceUpdated = { ...service };
      serviceUpdated.servicesDescriptions =
        serviceUpdated.servicesDescriptions.map((descriptionState) =>
          descriptionState._id === data._id ? data : descriptionState
        );
      setService(serviceUpdated);
      setDialogFormDescription(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditDescription = (descObject) => {
    setDescriptionS(descObject);
    setDialogFormDescription(true);
  };
  const handleDeleteDescription = (descObject) => {
    setDescriptionS(descObject);
    setDialogDeleteDescription(!dialogDeleteDescription);
  };

  const deleteDescription = async () => {
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
        `/services-descriptions/${descriptionS._id}`,
        config
      );
      toast.success(data.msg);
      const serviceUpdated = { ...service };
      serviceUpdated.servicesDescriptions =
        serviceUpdated.servicesDescriptions.filter(
          (descriptionState) => descriptionState._id !== descriptionS._id
        );

      setService(serviceUpdated);
      setDialogDeleteDescription(false);
      setDescriptionS({});
    } catch (error) {
      console.log(error);
    }
  };

  const logoutService = () => {
    setServices([]);
    setService({});
    setDescServices([]);
    setDescriptionS({});
  };

  return (
    <ServiceContext.Provider
      value={{
        services,
        handleDialogService,
        dialogService,
        submitService,
        handleEditService,
        handlePreviewService,
        service,
        dialogDeleteService,
        handleDeleteService,
        deleteService,
        descServices,
        getServiceById,
        handleDialogDescriptions,
        dialogFormDescriptions,
        descriptionS,
        submitDescription,
        handleEditDescription,
        handleDeleteDescription,
        dialogDeleteDescription,
        deleteDescription,
        logoutService,
        loader,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceProvider };

export default ServiceContext;
