import { useState } from "react";
import Link from "next/link";
import clientAxios from "@/config/clientAxios";
import toast from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([username, email, password, repeatPassword].includes("")) {
      toast.error("All fields are required");
      return;
    }
    if (password !== repeatPassword) {
      toast.error("Passwords are not the same");
      return;
    }
    if (password.length < 6) {
      toast.error(
        "The password is very short, it must have a minimum of 6 characters"
      );
      return;
    }
    try {
      const { data } = await clientAxios.post(`/users`, {
        username,
        email,
        password,
      });
      toast.success(data.msg);
      setUsername("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <h1 className="font-bold uppercase text-darkText text-center text-xl mb-6">
        Register an account now
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-10 relative">
          <label
            htmlFor="username"
            className=" text-base text-darkText font-bold"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full py-2 px-3 text-base border-solid border-2 border-gray-200 outline-none bg-transparent internIp text-darkText rounded-md mt-4 valid:bg-gray-100 focus:border-slate-600 placeholder:text-gray-500"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-10 relative">
          <label htmlFor="email" className=" text-base text-darkText font-bold">
            Email
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
            Password
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
        <div className="mb-10 relative">
          <label
            htmlFor="password2"
            className=" text-base text-darkText font-bold"
          >
            Repeat your password
          </label>
          <input
            type="password"
            id="password2"
            className="w-full py-2 px-3 text-base border-solid border-2 border-gray-200 outline-none bg-transparent internIp text-darkText rounded-md mt-4 valid:bg-gray-100 focus:border-slate-600 placeholder:text-gray-500"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={"Create Account"}
          className="bg-gradient-to-r from-primary1 to-primary2 w-full py-2 px-6 rounded-lg text-white uppercase cursor-pointer hover:to-primary1 transition-colors"
        />
      </form>
      <div className="flex justify-between pt-5 text-sm ">
        <Link href={"/auth"}>
          <span className="text-gray-400 hover:text-darkText">
            Already you have an account? Sign In
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

export default Register;
