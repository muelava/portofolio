import { MdEmail } from "react-icons/md";
import { Primary, Tertiary } from "../components/Buttons";
import { Link } from "react-router-dom";
import { FaFigma, FaFilePdf, FaGitAlt, FaGithub, FaHtml5, FaLaravel, FaLinkedinIn, FaReact } from "react-icons/fa";
import { RiExternalLinkFill, RiInstagramFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShowwcase } from "react-icons/si";
import { IoLogoIonic, IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import {
  // IoCodeSlashOutline,
  IoLogoCapacitor,
} from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { portofolio } from "../utils/constants";
// import { HiOutlineLink } from "react-icons/hi";
import SplitText from "../components/Splite";
import GradientText from "../components/GradientText";
import { Eye } from "lucide-react";

interface HomeProps {
  sectionRefs: {
    home: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    certificates: React.RefObject<HTMLDivElement>;
  };
}

const Home: React.FC<HomeProps> = ({ sectionRefs }) => {
  const data: any = portofolio();

  return (
    <>
      {/* HERO */}
      <section ref={sectionRefs.home} id="home" className="flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between py-10 px-4 md:px-0" style={{ fontFamily: "Poppins" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl font-extrabold" style={{ lineHeight: "1.5" }}>
            <small className="text-3xl">
              Hi, I'm{" "}
              <span className="text-teal-500">
                <SplitText text="Elang Hardifal" delay={150} animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }} animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }} threshold={0.2} rootMargin="-50px" />
              </span>
            </small>
            <br />
            UI/UX <span className="text-teal-500">Designer</span> &
            <br />
            Frontend <span className="text-teal-500">Engineer</span>
          </h2>
          <p className="opacity-80 font-light leading-normal">Blending technical expertise with creative insight, I am an Indonesian professional with over three years in freelancing and two years as a Front-end Developer at a fintech company. My focus is on crafting seamless user interfaces and compelling content. I look forward to discussing how we can work together.</p>
          <br />
          <div className="flex max-w-xs gap-3">
            <Primary link="mailto:muelava@gmail.com">
              <MdEmail /> Email Me
            </Primary>
            <Tertiary link="/my-cv">
              <Eye /> View CV
            </Tertiary>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <img src="/assets/img/elang-hero.png" alt="elang-hardifal" className="border border-teal-500/40 shadow-lg shadow-teal-500/50 rounded-2xl" />
        </div>
      </section>

      {/* Connect With */}
      <div className="max-w-md mx-auto" style={{ fontFamily: "Poppins" }}>
        <div className="mb-5 text-center">
          <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
            Connected With
          </GradientText>
        </div>
        <ul className="flex gap-3 justify-center text-center">
          <li>
            <Link target="_blank" to="https://www.linkedin.com/in/muhammad-elang-hardifal-866735169/" title="Linkedin" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all p-3 rounded-full inline-block">
              <FaLinkedinIn className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://www.instagram.com/elang_fal" title="Instagram" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all p-3 rounded-full inline-block">
              <RiInstagramFill className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://github.com/muelava" title="Github" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all p-3 rounded-full inline-block">
              <FaGithub className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://www.showwcase.com/muelava" title="Show Case" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all p-3 rounded-full inline-block">
              <SiShowwcase className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Skills */}
      <section ref={sectionRefs.skills} id="skills" className="mt-28 px-4" style={{ fontFamily: "Poppins" }}>
        <h3 className="text-4xl font-bold text-center mb-14">Skills</h3>
        <ul className="grid grid-cols-3 gap-y-20 justify-center max-w-7xl mx-auto">
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <FaHtml5 size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">Html5</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <FaFigma size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">Figma</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <RiTailwindCssFill size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">Tailwind css</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <IoLogoJavascript size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">JavaScript</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <BiLogoTypescript size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">TypeScript</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <FaReact size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">React</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <RiNextjsFill size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">Next</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <FaGitAlt size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">Git</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <FaLaravel size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">Laravel</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <IoLogoCapacitor size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">Capacitor</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <IoLogoIonic size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">Ionic</p>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="gap-2 opacity-70 hover:opacity-90 transition-opacity inline-block select-none">
              <TbBrandReactNative size={52} className="mx-auto" />
              <p className="uppercase text-center mt-2 text-sm font-semibold">React Native</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section ref={sectionRefs.projects} id="projects" className="mt-28 px-4" style={{ fontFamily: "Poppins" }}>
        <h3 className="text-4xl font-bold text-center mb-14">Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data.map((item: any) => (
            <div key={item.id} className="group">
              <div className="relative rounded-xl overflow-hidden bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/20">
                {/* Thumbnail */}
                <div className="w-full h-56 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${item.thumbnails})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex gap-3 justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {item.link?.website && (
                      <Link to={item.link.website} target="_blank" className="border border-teal-500 hover:scale-110 hover:bg-teal-500 transition-all p-3 text-teal-500 hover:text-white rounded-full backdrop-blur-sm bg-slate-900/50" title="Visit Website">
                        <RiExternalLinkFill size={24} />
                      </Link>
                    )}
                    {item.link?.design && (
                      <Link to={item.link.design} target="_blank" className="border border-teal-500 hover:scale-110 hover:bg-teal-500 transition-all p-3 text-teal-500 hover:text-white rounded-full backdrop-blur-sm bg-slate-900/50" title="View Design">
                        <FaFigma size={24} />
                      </Link>
                    )}
                    {item.link?.source && (
                      <Link to={item.link.source} target="_blank" className="border border-teal-500 hover:scale-110 hover:bg-teal-500 transition-all p-3 text-teal-500 hover:text-white rounded-full backdrop-blur-sm bg-slate-900/50" title="View Source Code">
                        <FaGithub size={24} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="font-bold text-xl text-teal-500 mb-2 group-hover:text-teal-400 transition-colors">{item.title}</h4>
                  <p className="text-slate-300 text-sm mb-4 opacity-80">{item.description}</p>

                  {/* Tech Stack */}
                  <div className="flex gap-2 flex-wrap">
                    {item.tech?.map((tech: string, i: number) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full font-medium bg-teal-700/10 text-teal-500 border border-teal-700/30 hover:bg-teal-700/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block mt-10">
            <Tertiary link="https://www.prokoin.com/portfolio" target="_blank">
              More Projects <RiExternalLinkFill />
            </Tertiary>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section ref={sectionRefs.certificates} id="certificates" className="mt-28 px-4" style={{ fontFamily: "Poppins" }}>
        <h3 className="text-4xl font-bold text-center mb-14">Certificates</h3>

        <div className="flex justify-center gap-5 max-w-7xl mx-auto flex-wrap">
          <Link target="_blank" to="https://drive.google.com/file/d/1rxMJ6WCyZP9dmplLodbpeMVdO9qc0fXj/view?usp=sharing" title="Linkedin" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all px-5 py-2.5 rounded-full flex gap-2 items-center">
            <FaFilePdf className="text-2xl" />
            <span className="text-teal-500">Participant</span>
          </Link>
          <Link target="_blank" to="https://drive.google.com/file/d/1LA2-9gkoJp7qlKeJASfTqPkllXRWT2oQ/view?usp=sharing" title="Linkedin" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all px-5 py-2.5 rounded-full flex gap-2 items-center">
            <FaFilePdf className="text-2xl" />
            <span className="text-teal-500">BNSP</span>
          </Link>
          <Link target="_blank" to="https://drive.google.com/file/d/14fFlCsh_AN_JTQf5Y1rOGqF4ae0QcTxe/view?usp=sharing" title="Linkedin" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all px-5 py-2.5 rounded-full flex gap-2 items-center">
            <FaFilePdf className="text-2xl" />
            <span className="text-teal-500">Award</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
