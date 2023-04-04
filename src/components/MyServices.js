import MyServiceDetail from "./MyServiceDetail";
import TitleSection from "./TitleSection";
import usePortfolio from "@/hooks/usePortfolio";

const MyServices = () => {
  const { services } = usePortfolio();

  return (
    <section
      id="all-services"
      className="p-0 pt-1 xm:pt-20 xm:pb-10 mb-12 xm:mb-0"
    >
      <div className="max-w-7xl mx-auto pt-10">
        <TitleSection title={"My Services"} span={"What I have for you"} />
        <div className="py-6 px-3 md:px:0 sm:max-w-lg xm:max-w-4xl  sm:mx-auto mt-7 flex flex-col gap-y-7">
          {services.map((service) => (
            <MyServiceDetail dataArray={service} key={service._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
