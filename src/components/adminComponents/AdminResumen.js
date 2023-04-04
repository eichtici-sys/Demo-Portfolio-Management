import Breadcrumb from "./Breadcrumb";
import RecentProjects from "./RecentProjects";
import ProfileResumen from "./ProfileResumen";
import DashResumen from "./DashResumen";
import RecentEducation from "./RecentEducation";
import RecentExperience from "./RecentExperience";
import useProfile from "@/hooks/useProfile";
import { resumenBC } from "@/data/breadcrumbList";
const AdminResumen = () => {
  const { profile } = useProfile();

  return (
    <div className="sm:px-3 sm:py-5 py-2 px-1">
      <div className="w-full rounded-lg flex justify-between backdrop-blur-sm">
        <div className="w-full bg-white py-2 sm:py-3 rounded-lg px-3 sm:px-4">
          <div className=" mb-2 sm:py-3 py-0">
            <Breadcrumb list={resumenBC} />
          </div>
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="col-span-1 md:col-span-2">
              <ProfileResumen resProfile={profile} />
              <RecentEducation />
              <RecentExperience />
            </div>
            <div className="col-span-3 px-1 md:px-5 sm:py-3 py-2">
              <DashResumen />
              <div className="mt-5">
                <RecentProjects />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminResumen;
