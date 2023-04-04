import { useState, useEffect, createContext } from "react";
import Cookies from "universal-cookie";
import clientAxios from "@/config/clientAxios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  const cookies = new Cookies();

  useEffect(() => {
    const authUser = async () => {
      const token = cookies.get("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clientAxios("/users/admin-profile", config);
        setAuth(data);
      } catch (error) {
        setAuth({});
      }
      setLoading(false);
    };
    authUser();
  }, []);

  const logoutAuth = () => {
    setAuth({});
    setAuthorized(false);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        authorized,
        setAuthorized,
        logoutAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
