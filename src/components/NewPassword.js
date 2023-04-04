import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clientAxios from "@/config/clientAxios";
import toast from "react-hot-toast";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [validToken, setValidToken] = useState(false);
  const [newPswd, setNewPswd] = useState(false);
  const router = useRouter();

  const { token } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    const checkToken = async () => {
      try {
        const { data } = await clientAxios(`/users/reset-password/${token}`);
        setValidToken(true);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    checkToken();
  }, [token, router.isReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error(
        "The password is very short, it must have a minimum of 6 characters"
      );
      return;
    }
    try {
      const url = `/users/reset-password/${token}`;
      const { data } = await clientAxios.post(url, { password });
      toast.success(data.msg);

      setNewPswd(true);
      setPassword("");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <h1 className="font-bold uppercase text-darkText text-center text-xl mb-6">
        Reset your password
      </h1>
      {validToken && (
        <form onSubmit={handleSubmit}>
          <div className="mb-10 relative">
            <label
              htmlFor="password"
              className=" text-base text-darkText font-bold"
            >
              Password
            </label>
            <input
              type="username"
              id="password"
              className="w-full py-2 px-3 text-base border-solid border-2 border-gray-200 outline-none bg-transparent internIp text-darkText rounded-md mt-4 valid:bg-gray-100 focus:border-slate-600 placeholder:text-gray-500"
              placeholder="Enter your email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value={"Change Password"}
            className="bg-gradient-to-r from-primary1 to-primary2 w-full py-2 px-6 rounded-lg text-white uppercase cursor-pointer hover:to-primary1 transition-colors"
          />
        </form>
      )}
      {newPswd && (
        <div className="w-full text-center py-2 bg-white border-2 border-primary1 rounded-md mt-4 text-primary1 hover:bg-primary1 hover:text-white">
          <Link href={"/auth"}>
            <span className="font-bold cursor-pointer">Sign In Now</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default NewPassword;
