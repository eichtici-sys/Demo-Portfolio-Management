import AuthLayout from "@/layout/AuthLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clientAxios from "@/config/clientAxios";
import toast from "react-hot-toast";

const ConfirmPswd = () => {
  const [confirmAccount, setconfirmAccount] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!router.isReady) return;
    const confirmAccount = async () => {
      try {
        const url = `/users/confirm/${id}`;
        const { data } = await clientAxios(url);
        toast.success(data.msg);
        setconfirmAccount(true);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    confirmAccount();
  }, [router.query.id, router.isReady, id]);

  return (
    <>
      <AuthLayout pagina={"Reset Password"}>
        <>
          <h1 className="font-bold uppercase text-darkText text-center text-xl mb-6">
            Confirm your account
          </h1>
          <div>
            {confirmAccount && (
              <div className="w-full text-center">
                <Link href={"/auth"}>
                  <span className="text-primary1 font-bold cursor-pointer">
                    Sign In Now
                  </span>
                </Link>
              </div>
            )}
          </div>
        </>
      </AuthLayout>
    </>
  );
};

export default ConfirmPswd;
