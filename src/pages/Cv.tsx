import { Mail, MapPin, Printer, SquareTerminal } from "lucide-react";
import { aboutMe, socialLinks } from "../libs/cvData";
import ExperienceComponent from "../components/cv/ExperienceComponent";
import EducationComponent from "../components/cv/EducationComponent";
import CertificateComponent from "../components/cv/CertificateComponent";
import SkillComponent from "../components/cv/SkillComponent";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const CvPage = () => {
  const componentRef = useRef<HTMLElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Muhammad_Elang_Hardifal_CV",
    pageStyle: `
      @page {
        size: A2;
        margin: 15mm 5mm;
        @top-left { content: ""; }
        @top-center { content: ""; }
        @top-right { content: ""; }
        @bottom-left { content: ""; }
        @bottom-center { content: ""; }
        @bottom-right { content: ""; }
      }
      
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
        
        .no-print {
          display: none !important;
        }
        
        .print-break {
          page-break-before: always;
        }
        
        .avoid-break {
          page-break-inside: avoid;
        }
      }
    `,
  });

  return (
    <>
      <button onClick={handlePrint} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors">
        <Printer size={16} />
        Print CV
      </button>

      <section className="max-w-7xl mx-auto p-4" ref={componentRef}>
        {/* ====== PROFILE ====== */}
        <div className="flex gap-x-10 items-center">
          <img src="/assets/img/elang-hero.png" alt="elang_fal" className="size-24 rounded-full object-contain border-2 border-teal-500" />
          <div>
            <p className="font-semibold text-lg">Muhammad Elang Hardifal</p>
            <p className="text-sm font-light my-1">Frontend Engineer</p>
            <ul className="flex gap-x-3 items-center">
              <li className="flex items-center gap-x-1 text-xs">
                <Mail size={12} />
                <a href="#" target="_blank">
                  muelava@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-x-1 text-xs">
                <MapPin size={12} />
                <a href="#" target="_blank">
                  East Jakarta, Indonesia
                </a>
              </li>
              <li className="flex items-center gap-x-1 text-xs">
                <SquareTerminal size={12} />
                <a href="#" target="_blank">
                  4 Years Experience
                </a>
              </li>
            </ul>
          </div>
        </div>

        <br />
        <br />

        {/* ====== SOCIAL LINKS ====== */}
        <div>
          <p className="text-lg font-semibold mb-3">Social Links</p>
          <div className="grid grid-cols-2 gap-5">
            {socialLinks.map((item, index) => (
              <div key={index}>
                <p>{item.socialMedia}</p>
                <a href={item.url} target="_blank" className="text-xs italic font-light line-clamp-1">
                  {item.url}
                </a>
              </div>
            ))}
          </div>
        </div>

        <br />
        <br />

        {/* ====== ABOUT ME ====== */}
        <div>
          <p className="text-lg font-semibold mb-3">About Me</p>
          <article className="text-sm prose leading-6" dangerouslySetInnerHTML={{ __html: aboutMe }} />
        </div>

        <br />
        <br />

        {/* ====== EXPERIENCES ====== */}
        <ExperienceComponent />

        <br />
        <br />

        {/* ====== EDUCATIONS ====== */}
        <EducationComponent />

        <br />
        <br />

        {/* ====== CERTIFICATIONS ====== */}
        <CertificateComponent />

        <br />
        <br />
        {/* ====== SKILLS ====== */}
        <SkillComponent />
      </section>
    </>
  );
};

export default CvPage;
