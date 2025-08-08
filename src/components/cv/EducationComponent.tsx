import { GraduationCap } from "lucide-react";
import { educationData } from "../../libs/cvData";

const EducationComponent = () => {
  // Function untuk format tanggal
  const formatDate = (dateString: string) => {
    if (dateString === "") return "Present";

    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div>
      <p className="text-lg font-semibold mb-8">Educations</p>
      {educationData.map((item, index) => (
        <div key={index} className="flex gap-x-3">
          <div>
            <span className="bg-teal-500/20 size-12 flex items-center justify-center rounded-full relative">
              <GraduationCap size={24} className="text-teal-500" />
            </span>
          </div>
          <div className="flex-auto">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">{item.degree}</p>
                <small className="font-light block text-gray-400">
                  {item.campus} | {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </small>
                <small className="font-light block text-gray-400">Grade: {item.grade}</small>
              </div>
            </div>
            <article className="text-sm prose leading-6 my-3 prose" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;
