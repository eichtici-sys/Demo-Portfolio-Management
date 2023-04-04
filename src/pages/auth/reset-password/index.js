import ResetPsw from "@/components/ResetPsw";
import AuthLayout from "@/layout/AuthLayout";

export default function Home() {
  return (
    <>
      <AuthLayout pagina={"Reset Password"}>       
        <ResetPsw />
      </AuthLayout>
    </>
  );
}
