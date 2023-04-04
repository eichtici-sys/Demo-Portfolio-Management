import { useState } from "react";
import Link from "next/link";
import clientAxios from "@/config/clientAxios";
import toast from "react-hot-toast";

function ResetPsw() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || email.length < 6) {
      toast.error("Email is required");
    }
    try {
      const { data } = await clientAxios.post(`/users/reset-password`, {
        email,
      });
      toast.success(data.msg);
      setEmail("");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <h1 className="font-bold uppercase text-darkText text-center text-xl mb-6">
        Recovery your password
      </h1>
      <form onSubmit={handleSubmit}>
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

        <input
          type="submit"
          value={"Send Instructions"}
          className="bg-gradient-to-r from-primary1 to-primary2 w-full py-2 px-6 rounded-lg text-white uppercase cursor-pointer hover:to-primary1 transition-colors"
        />
      </form>
      <div className="flex flex-col items-center pt-5 text-sm ">
        <div className="text-gray-400 text-xs py-1">or</div>
        <Link href={"/auth"}>
          <span className="text-gray-400 hover:text-darkText underline">
            Sig In Now
          </span>
        </Link>
      </div>
    </>
  );
}

export default ResetPsw;
