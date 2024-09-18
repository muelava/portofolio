import { MdEmail } from "react-icons/md"
import { Primary, Tertiary } from "../components/Buttons"
import { Link } from "react-router-dom"
import { FaDownload, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaLaravel, FaLinkedinIn, FaReact } from "react-icons/fa"
import { RiInstagramFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiShowwcase } from "react-icons/si"
import { IoLogoIonic, IoLogoJavascript } from "react-icons/io"
import { BiLogoTypescript } from "react-icons/bi"
import { IoLogoCapacitor } from "react-icons/io5"
import { TbBrandReactNative } from "react-icons/tb"

const Home = () => {
    return (
        <>
            {/* HERO */}
            <section className="flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between py-10 px-4 md:px-0" style={{ fontFamily: 'Poppins' }}>
                <div className="max-w-xl mx-auto">
                    <h2 className="text-5xl font-extrabold" style={{ lineHeight: "1.5" }}>
                        <small className="text-3xl">Hi, I'm <span className="text-teal-500">Elang Hardifal</span></small>
                        <br />
                        Web <span className="text-teal-500">Developer</span> &
                        <br />
                        UI/UX <span className="text-teal-500">Designer</span>
                    </h2>
                    <p className="opacity-80 font-light leading-normal">I am from Indonesia and I am a Content Creator. I have worked at a financial technology company in Indonesia as a Front-end Developer for over two years. Additionally, I have been freelancing for more than three years, and I am now looking forward to collaborating with you!</p>
                    <br />
                    <div className="flex max-w-xs gap-3">
                        <Primary link="mailto:muelava@gmail.com">
                            <MdEmail /> Email Me
                        </Primary>
                        <Tertiary link="https://drive.google.com/file/d/1ry1uoseK2NABo6DQpcgl8bor3DhCUtxz/view?usp=sharing" target="_blank">
                            <FaDownload /> Download CV
                        </Tertiary>
                    </div>
                </div>
                <div className="max-w-xl mx-auto">
                    <img src="/src/assets/img/elang-hero.png" alt="elang-hardifal" className="border border-teal-500/40 shadow-lg shadow-teal-500/50 rounded-2xl" />
                </div>
            </section>

            {/* Connect With */}
            <div className="max-w-md mx-auto">
                <p className="mb-5 text-center">Connected With</p>
                <ul className="flex gap-3 justify-center text-center">
                    <li>
                        <Link target="_blank" to="https://www.linkedin.com/in/muhammad-elang-hardifal-866735169/" title="Linkedin" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all p-3 rounded-full inline-block"><FaLinkedinIn className="text-2xl" /></Link>
                    </li>
                    <li>
                        <Link target="_blank" to="https://www.instagram.com/elang_fal" title="Instagram" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all p-3 rounded-full inline-block"><RiInstagramFill className="text-2xl" /></Link>
                    </li>
                    <li>
                        <Link target="_blank" to="https://github.com/muelava" title="Github" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all p-3 rounded-full inline-block"><FaGithub className="text-2xl" /></Link>
                    </li>
                    <li>
                        <Link target="_blank" to="https://www.showwcase.com/muelava" title="Show Case" className="bg-teal-800/20 hover:bg-teal-800/40 text-teal-600 hover:text-teal-500 transition-all p-3 rounded-full inline-block"><SiShowwcase className="text-2xl" /></Link>
                    </li>
                </ul>
            </div>

            {/* Skills */}
            <section className="mt-28">
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
            <section className="mt-28">
                <h3 className="text-4xl font-bold text-center mb-14">Projects</h3>

                <div className="grid grid-cols-3 max-w-7xl mx-auto">
                    {Array.from({ length: 3 }).map((_, index: any) => (
                        <Link to={"https://www.figma.com/proto/eXX7gIVdvnK7M725x8pzBg/satu_ilmu_web?node-id=460-337&node-type=canvas&t=SNw5443kIX8pURg5-0&scaling=scale-down-width&content-scaling=fixed&page-id=460%3A336&starting-point-node-id=460%3A337"} key={index}>
                            <img src="/src/assets/img/satu-ilmu.png" alt="satu-ilmu" className="aspect-video object-contain w-full" />
                        </Link>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Home