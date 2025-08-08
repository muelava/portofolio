import { skillData } from "../../libs/cvData";

const SkillComponent = () => {
  return (
    <div>
      <p className="text-lg font-semibold mb-8">Skills</p>
      <div className="flex gap-3 flex-wrap">
        {skillData.map((tech, techIndex) => (
          <span key={techIndex} className="text-xs px-3 py-1.5 border border-gray-500 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillComponent;
