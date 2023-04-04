import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { auth } = useAuth();
  return <>{auth._id ? children : router.push("/")}</>;
};
export default ProtectedRoute;
