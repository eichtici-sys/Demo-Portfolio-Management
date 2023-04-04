import Register from "@/components/Register";
import AuthLayout from "@/layout/AuthLayout";

export default function RegisterAccount() {
  return (
    <>
      <AuthLayout pagina={"Register"}>
        <Register />
      </AuthLayout>
    </>
  );
}
