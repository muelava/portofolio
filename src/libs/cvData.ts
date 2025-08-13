export type SocialLink = {
  socialMedia: string;
  url: string;
};

export type ExperienceData = {
  logo: string;
  jobAs: string;
  company: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  description: string;
};

export type EducationData = {
  logo: string;
  degree: string;
  campus: string;
  startDate: string;
  endDate: string;
  grade: string;
  description: string;
};

export type CertificateData = {
  certificateNo: string;
  title: string;
  organizer: string;
  startDate: string;
  endDate: string;
};

export const socialLinks: SocialLink[] = [
  {
    socialMedia: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-elang-hardifal-866735169/",
  },
  {
    socialMedia: "Instagram",
    url: "https://www.instagram.com/elang_fal/",
  },
  {
    socialMedia: "GitHub",
    url: "https://github.com/muelava",
  },
  {
    socialMedia: "Website",
    url: "https://www.elang-hardifal.my.id/",
  },
];

export const aboutMe: string = `I am a professional in web design, frontend development, and web application development with over
4 years of experience. I specialize in designing and developing intuitive and responsive user interfaces.
Additionally, I have experience in project management, with strong communication skills in
coordinating with teams and stakeholders to ensure that each project aligns with its specified
requirements and goals.
<br/>
I am capable of handling complex projects with efficient and innovative solutions and am known for
resolving UI-related issues while maintaining performance across platforms`;

export const experienceData: ExperienceData[] = [
  {
    logo: "stafbook.png",
    jobAs: "Frontend Engineer",
    company: "Staf Book",
    startDate: "2025-05-01",
    endDate: "",
    techStack: ["Tailwind Css", "React", "Tauri", "TypeScript", "Zustand", "IndexDB", "Tanstack"],
    description: `As a Frontend Engineer at Company A, I developed cross-platform desktop applications for
Windows and macOS using React and Tauri. I implemented an offline mode feature with local
database storage, ensuring the app functions without internet connection. Additionally, I built
a data synchronization mechanism to automatically update data once back online. I
collaborated closely with the backend team to design and integrate APIs for smooth frontendbackend interaction.`,
  },
  {
    logo: "danamart.png",
    jobAs: "Frontend Developer",
    company: "PT. Dana Aguna Nusantara",
    startDate: "2022-02-01",
    endDate: "2025-05-15",
    techStack: ["Bootstrap", "jQuery", "Rest API", "Figma", "JavaScript", "React Native", "Webpack", "Apache Cordova", "Tailwind Css", "Vue Js", "React Js"],
    description: `Responsible for designing and implementing user interfaces for both web and mobile
applications, ensuring they are visually appealing, responsive, and functionally robust.
Collaborate with cross-functional teams to translate project requirements into high quality
code using technologies like React, JavaScript, Tailwind Css, Cordova, and Ionic. Continuously
optimize and maintain existing applications to improve performance, user experience, and
cross-platform compatibility.`,
  },
  {
    logo: "ioda.png",
    jobAs: "Frontend Developer",
    company: "Ioda Academy",
    startDate: "2024-12-01",
    endDate: "2025-03-01",
    techStack: ["Tailwind Css", "Shadcn UI", "Typescript", "Next.Js"],
    description: `As a Frontend Developer at Ioda Academy, I am responsible for developing and maintaining
various features of the e-learning platform, including the Project Training, Project Detail, and
Profile pages. I focus on delivering a smooth and responsive user experience using modern
frontend technologies.<br/>
- Develop and maintain Ioda Academy s e-learning platform.<br/>
- Build and enhance Project Training, Project Detail, and Profile pages.<br/>
- Tech stack: Next.js, ShadCN UI, TypeScript, Tailwind CSS.`,
  },
  {
    logo: "prokoin.png",
    jobAs: "Lead Frontend Developer",
    company: "Prokoin",
    startDate: "2022-01-01",
    endDate: "2024-12-01",
    techStack: ["Bootstrap", "jQuery", "Rest API", "Figma", "JavaScript", "TypeScript", "Node.Js", "TailwindCss", "React.Js", "Vue.Js", "Firebase", "Redux", "Laravel", "Git"],
    description: `- Led and managed web and mobile application development projects, serving as the liaison between the development team and clients to ensure all project requirements and goals were successfully met. <br/>
- Responsible for designing and developing user-friendly web and mobile applications with seamless functionality. <br/>
- Oversaw the entire development process to ensure projects were on track, met performance standards, and were responsive across dierent platforms.`,
  },
  {
    logo: "mfg.png",
    jobAs: "UI/UX Designer & Frontend Developer",
    company: "PT. Mitra Fesyen Global",
    startDate: "2021-10-01",
    endDate: "2022-03-01",
    techStack: ["Figma", "Adobe XD", "Prototyping", "Bootstrap", "Tailwind Css", "jQuery", "Laravel", "Git", "CodeIgniter", "SASS/SCSS"],
    description: `- Designed user interfaces from initial wireframes to high-delity prototypes, ensuring a cohesive and intuitive user experience. <br/>
- Performed slicing of designs and implemented them directly, collaborating closely with backend developers to ensure seamless integration and functionality. <br/>
- Took a hands-on approach in bridging the gap between design and development, ensuring that the nal product was both visually appealing and fully functional.`,
  },
];

export const educationData: EducationData[] = [
  {
    logo: "unpam.png",
    degree: "Bachelor's in Information Technology",
    campus: "Pamulang University",
    startDate: "2017-09-01",
    endDate: "2021-10-01",
    grade: "B",
    description: `Bachelor s Degree in Information Technology with a focus on software development and
interface design. Developed skills in frontend programming using React and backend
development with Node.js, as well as applying UI/UX principles across various design projects.`,
  },
  {
    logo: "smkn1p.png",
    degree: "Vocational High School Diploma in Computer and Network Engineering",
    campus: "SMK Negeri 1 Padaherang",
    startDate: "2014-06-01",
    endDate: "2017-06-01",
    grade: "B",
    description: `A graduate of SMK Negeri 1 Padaherang majoring in Computer and Network Engineering.
Possesses fundamental knowledge and skills in network installation, computer assembly,
troubleshooting, and managing network operating systems. Eager to further develop abilities
in the eld of IT and networking.`,
  },
];

export const certificateData: CertificateData[] = [
  {
    certificateNo: "N/A",
    title: "Staff of the Month Award",
    organizer: "Danamart",
    startDate: "2024-01-01",
    endDate: "2024-05-01",
  },
  {
    certificateNo: "620102514400051002021",
    title: "Certicate of Competence",
    organizer: "Pamulang University",
    startDate: "2021-10-01",
    endDate: "2024-10-01",
  },
];

export const skillData: string[] = ["Figma", "HTML/CSS", "JavaScript", "Bootstrap", "TailwindCss", "jQuery", "PHP", "React.Js", "Apache Cordova", "GitHub", "GitLab", "MUI", "React Native", "Next.Js", "SASS/SCSS", "TypeScript", "Node.Js", "Firebase", "Ionic", "Capacitor", "Vue.Js", "Redux", "MVC", "Razor", "CodeIgniter", "Laravel"];
