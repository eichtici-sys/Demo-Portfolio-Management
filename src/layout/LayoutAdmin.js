import NavbarAdmin from "@/components/adminComponents/NavbarAdmin";
import Sidebar from "@/components/adminComponents/Sidebar";
import Head from "next/head";
import useAuth from "@/hooks/useAuth";
import { RouteGuard } from "@/components/adminComponents/RouteGuard";
import SpinnerLoading from "@/components/adminComponents/SpinnerLoading";
import { ProfileProvider } from "@/context/ProfileProvider";
import { ServiceProvider } from "@/context/ServiceProvider";
import { QualificationProvider } from "@/context/QualificationProvider";
import { ProjectProvider } from "@/context/ProjectProvider";
import { Toaster } from "react-hot-toast";

export default function LayoutAdmin({ children, pagina = "" }) {
  const { loading, authorized } = useAuth();
  const titlePage = `Eichtici Developer | ${pagina}`;

  if (loading) return <SpinnerLoading />;
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <ProfileProvider>
        <ServiceProvider>
          <QualificationProvider>
            <ProjectProvider>
              {authorized && (
                <div
                  className={`flex bg-gradient-to-r from-primary1 to-primary2`}
                >
                  <Sidebar />
                  <main className="flex-1 h-screen overflow-y-scroll">
                    <NavbarAdmin />
                    {children}
                  </main>
                  <Toaster position="top-right" />
                </div>
              )}
              {!authorized && (
                <RouteGuard>
                  <div
                    className={`flex bg-gradient-to-r from-primary1 to-primary2`}
                  >
                    <Sidebar />
                    <main className="flex-1 h-screen overflow-y-scroll">
                      <NavbarAdmin />
                      {children}
                    </main>
                    <Toaster position="top-right" />
                  </div>
                </RouteGuard>
              )}
            </ProjectProvider>
          </QualificationProvider>
        </ServiceProvider>
      </ProfileProvider>
    </>
  );
}
