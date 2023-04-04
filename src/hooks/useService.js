import { useContext } from "react";
import ServiceContext from "@/context/ServiceProvider";

const useService = () => {
  return useContext(ServiceContext);
};
export default useService;
