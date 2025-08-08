import { GraduationCap } from "lucide-react";
import { certificateData } from "../../libs/cvData";

const CertificateComponent = () => {
  // Function untuk format tanggal
  const formatDate = (dateString: string) => {
    if (dateString === "") return "Present";

    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div>
      <p className="text-lg font-semibold mb-8">Certifications</p>
      {certificateData.map((item, index) => (
        <div key={index} className="flex gap-x-3 mb-3">
          <div>
            <span className="bg-teal-500/20 size-12 flex items-center justify-center rounded-full relative">
              <GraduationCap size={24} className="text-teal-500" />
            </span>
          </div>
          <div className="flex-auto">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">{item.title}</p>
                <small className="font-light block text-gray-400">
                  {item.organizer} | {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </small>
                <small className="font-light block text-gray-400">Grade: {item.certificateNo}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateComponent;
