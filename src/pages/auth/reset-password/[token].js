import AuthLayout from "@/layout/AuthLayout";
import NewPassword from "@/components/NewPassword";

const ResetPsw = () => {
  return (
    <>
      <AuthLayout pagina={"Reset Password"}>
        <NewPassword />
      </AuthLayout>
    </>
  );
};

export default ResetPsw;
