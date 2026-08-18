import { experienceData, ExperienceData } from "../../libs/cvData";
import { calculateWorkDuration } from "../../utils/calculateWorkDuration";

// Function untuk format tanggal
const formatDate = (dateString: string) => {
  if (dateString === "") return "Present";

  const date = new Date(dateString);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

// Function untuk sorting berdasarkan startDate (terbaru di atas)
const sortExperiencesByDate = (experiences: ExperienceData[]) => {
  return experiences.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
};

const ExperienceComponent = () => {
  const sortedExperiences = sortExperiencesByDate([...experienceData]);

  return (
    <div>
      <p className="text-lg font-semibold mb-8">Experiences</p>
      {sortedExperiences.map((experience, index) => (
        <div key={index}>
          {/* special case - page break */}
          {/* {experience.company === "Prokoin" && <div className="print-break" />} */}

          {/* render item */}
          <div className="flex gap-x-3 mb-8">
            <div>
              {/* <span className="bg-teal-500/20 size-12 flex items-center justify-center rounded-full relative">
                <Building size={24} className="text-teal-500" />
              </span> */}
              <img src={`/assets/companies/${experience.logo}`} alt={experience.logo} className="size-12 min-w-12 w-12 object-contain" />
            </div>
            <div className="flex-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  <p className="text-lg font-semibold">{experience.jobAs}</p>
                  <small className="font-light text-neutral-400 print:text-neutral-700">{experience.company}</small>
                </div>
                <div>
                  <span className="text-xs">
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)} | {calculateWorkDuration(experience.startDate, experience.endDate)}
                  </span>
                </div>
              </div>
              <article className="text-sm prose leading-6 my-3" dangerouslySetInnerHTML={{ __html: experience.description }} />
              <div className="flex gap-3 flex-wrap">
                {experience.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs px-3 py-1.5 border border-gray-500 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceComponent;
