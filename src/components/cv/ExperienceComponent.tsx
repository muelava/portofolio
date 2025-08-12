import { experienceData, ExperienceData } from "../../libs/cvData";

// Function untuk menghitung durasi kerja
const calculateWorkDuration = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = endDate === "" ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0) {
    return `${months}mos`;
  } else if (months === 0) {
    return `${years}yrs`;
  } else {
    return `${years}yrs ${months}mos`;
  }
};

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
        <div key={index} className="flex gap-x-3 mb-5">
          <div>
            {/* <span className="bg-teal-500/20 size-12 flex items-center justify-center rounded-full relative">
                <Building size={24} className="text-teal-500" />
              </span> */}
            <img src={`/assets/companies/${experience.logo}`} alt={experience.logo} className="size-12 min-w-12 w-12 object-contain" />
          </div>
          <div className="flex-auto">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">{experience.jobAs}</p>
                <small className="font-light text-gray-400">{experience.company}</small>
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
      ))}
    </div>
  );
};

export default ExperienceComponent;
