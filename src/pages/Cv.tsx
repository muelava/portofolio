import { Download, Mail, MapPin, Printer, SquareTerminal } from "lucide-react";
import { aboutMe, socialLinks } from "../libs/cvData";
import ExperienceComponent from "../components/cv/ExperienceComponent";
import EducationComponent from "../components/cv/EducationComponent";
import CertificateComponent from "../components/cv/CertificateComponent";
import SkillComponent from "../components/cv/SkillComponent";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Whatsapp } from "iconsax-reactjs";
import { calculateWorkDuration } from "../utils/calculateWorkDuration";
import { format } from "date-fns";

const CvPage = () => {
  const componentRef = useRef<HTMLElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "CV_Muhammad_Elang_Hardifal_" + format(new Date(), "dd-MMMM-yyyy"),
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
      <div className="hidden md:block fixed bottom-0 left-0 right-0 p-3 bg-neutral-900 shadow-xl z-30">
        <div className="grid grid-cols-1 gap-x-3 max-w-7xl mx-auto">
          <button onClick={handlePrint} className="flex items-center justify-center gap-2 border border-teal-600 hover:bg-teal-700 text-teal-600 hover:text-white p-4 rounded-lg shadow-lg transition-colors disabled:pointer-events-none disabled:opacity-60">
            <Printer size={16} />
            Print CV
          </button>
          <button onClick={handlePrint} className="hidden items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-lg shadow-lg transition-colors disabled:pointer-events-none disabled:opacity-60">
            <Download size={16} />
            Download CV
          </button>
        </div>
      </div>

      <section className="max-w-7xl mx-auto p-4" ref={componentRef}>
        {/* ====== PROFILE ====== */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center">
          <img src="/assets/img/elang-hero.png" alt="elang_fal" className="size-24 rounded-full object-contain border-2 border-teal-500" />
          <div>
            <p className="font-semibold text-lg text-center sm:text-start">Muhammad Elang Hardifal</p>
            <p className="text-sm font-light my-1.5 sm:my-1 text-center sm:text-start">Frontend Engineer</p>
            <ul className="flex flex-col sm:flex-row gap-0.5 sm:gap-3 items-center">
              <li className="flex items-center gap-x-1 text-[11px] sm:text-xs">
                <Whatsapp className="size-[10px] sm:size-3" />
                <a href="https://wa.me/6282115100979" target="_blank">
                  +62 8211-5100-979
                </a>
              </li>
              <li className="flex items-center gap-x-1 text-[11px] md:text-xs">
                <Mail className="size-[10px] md:size-3" />
                <a href="mailto:muelava@gmail.com" target="_blank">
                  muelava@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-x-1 text-[11px] md:text-xs">
                <MapPin className="size-[10px] md:size-3" />
                <a href="#" target="_blank">
                  East Jakarta, Indonesia
                </a>
              </li>
              <li className="flex items-center gap-x-1 text-[11px] md:text-xs">
                <SquareTerminal className="size-[10px] md:size-3" />
                <a href="#" target="_blank">
                  {calculateWorkDuration("2021-10-01", "")} Experience
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
