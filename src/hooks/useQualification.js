import { useContext } from "react";
import QualificationContext from "@/context/QualificationProvider";

const useQualification = () => {
  return useContext(QualificationContext);
};

export default useQualification;
