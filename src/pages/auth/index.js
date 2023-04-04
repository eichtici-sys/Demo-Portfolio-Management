import Login from "@/components/Login";
import AuthLayout from "@/layout/AuthLayout";

export default function Home() {
  return (
    <>
      <AuthLayout pagina={"Login"}> <Login/> </AuthLayout>
    </>
  );
}
