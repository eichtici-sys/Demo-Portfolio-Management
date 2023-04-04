import TitleSection from "./TitleSection";
import Skill from "./Skill";
import usePortfolio from "@/hooks/usePortfolio";

const SkillsSection = () => {
  const { levels } = usePortfolio();
  return (
    <section id="skills" className="p-0 pt-6 xm:pt-20 xm:pb-20 mb-12 xm:mb-0">
      <div className="max-w-7xl mx-auto pt-4">
        <TitleSection title={"Skills"} span={"My technical Level"} />
        <div className="grid xm:grid-cols-2 grid-cols-1 mt-10 sm:max-w-lg md:max-w-[900px] mx-auto">
          {levels.map((sk) => (
            <div className="py-4 px-8" key={sk._id}>
              <Skill
                title={sk.title}
                icon={sk.icon}
                span={sk.description}
                array={sk.skills}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
