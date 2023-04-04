import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import clientAxios from "@/config/clientAxios";
import Cookies from "universal-cookie";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setAuth, auth } = useAuth();

  useEffect(() => {
    if (auth?._id) {
      router.push("/admin");
    }
  }, [router, auth?._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      toast.error("All fields are required");
    }
    try {
      const { data } = await clientAxios.post("/users/login", {
        email,
        password,
      });
      const cookies = new Cookies();
      cookies.set("token", data.token, { path: "/" });
      setAuth(data);
      router.push("/admin");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <h1 className="font-bold uppercase text-darkText text-center text-xl mb-6">
        Welcome
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-10 relative">
          <label htmlFor="email" className=" text-base text-darkText font-bold">
            Email:{" "}
            <span className="font-light text-primary1">
              {" "}
              For Demo use test@test.com
            </span>
          </label>
          <input
            type="text"
            id="email"
            className="w-full py-2 px-3 text-base border-solid border-2 border-gray-200 outline-none bg-transparent internIp text-darkText rounded-md mt-4 valid:bg-gray-100 focus:border-slate-600 placeholder:text-gray-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-10 relative">
          <label
            htmlFor="password"
            className=" text-base text-darkText font-bold"
          >
            Password:{" "}
            <span className="font-light text-primary1">
              {" "}
              For Demo use 1234567
            </span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full py-2 px-3 text-base border-solid border-2 border-gray-200 outline-none bg-transparent internIp text-darkText rounded-md mt-4 valid:bg-gray-100 focus:border-slate-600 placeholder:text-gray-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={"Sign In"}
          className="bg-gradient-to-r from-primary1 to-primary2 w-full py-2 px-6 rounded-lg text-white uppercase cursor-pointer hover:to-primary1 transition-colors"
        />
      </form>
      <div className="flex justify-between pt-5 text-sm ">
        <Link href={"/"}>
          <span className="text-gray-400 hover:text-darkText">
            Go to Website
          </span>
        </Link>
        <Link href={"/auth/reset-password"}>
          <span className="text-gray-400 hover:text-darkText">
            Forgot password ?
          </span>
        </Link>
      </div>
    </>
  );
};

export default Login;
