"use client";

import Hero from "./Components/Sections/HeroComponent";
import Navbar from "./Components/Sections/NavbarComponent";
import AboutComponent from "./Components/Sections/AboutComponent";
import Projects, {
  ProjectProps,
} from "./Components/Sections/PojectsComponents";
import staticProjectData from "./data/staticWebsites.json";
import apiProjectsData from "./data/apiProjects.json"
import technicalProjects from "./data/technicalProjects.json"


export default function Home() {
  const staticProjectsArr: ProjectProps[] = staticProjectData as ProjectProps[];
  const apiProjectArr: ProjectProps[] = apiProjectsData as ProjectProps[];
  const technicalProjectsArr: ProjectProps[] = technicalProjects as ProjectProps[];

  return (
    <div className="">
      
      <Navbar />
      <Hero />

      <section id="about">
        <AboutComponent
          title={"About Me"}
          image={"/assets/me1.png"}
          imageAlt={"Andrew"}
          description={
            "Hello, my name is Andrew Sayasing. I am a Full Stack Junior Web Developer who studied and graduated from CodeStack Acedemy located in Stockton, California."
          }
        />
      </section>

      {/* Projects */}
      <section className="bg-gray-100">
      <h1 className="text-3xl pb-10" id="projects">Projects</h1>

        {/* Static */}
        <h1 id="static">Static Webpages</h1>
        <div className="grid grid-cols-3">
          {staticProjectsArr.map((project, index) => (
            <Projects
              key={index}
              title={project.title}
              projectImg={project.projectImg}
              projectImgAlt={project.projectImgAlt}
              projectVercel={project.projectVercel}
              projectDescription={project.projectDescription}
              stack={project.stack}
            />
          ))}
        </div>

          {/* Api */}
        <h1 id="api">API Applications</h1>          
        <div className="grid grid-cols-3">
          {apiProjectArr.map((project, index) => (
            <Projects
              key={index}
              title={project.title}
              projectImg={project.projectImg}
              projectImgAlt={project.projectImgAlt}
              projectVercel={project.projectVercel}
              projectDescription={project.projectDescription}
              stack={project.stack}
            />
          ))}
        </div>

          {/* Technical */}
        <h1 id="tech">Technical Applications</h1>
        <div className="grid grid-cols-3">
          {technicalProjectsArr.map((project, index) => (
            <Projects
              key={index}
              title={project.title}
              projectImg={project.projectImg}
              projectImgAlt={project.projectImgAlt}
              projectVercel={project.projectVercel}
              projectDescription={project.projectDescription}
              stack={project.stack}
            />
          ))}
        </div>
      </section>

      {/* Contact  */}
      <section id="contact" className="py-5 container mx-auto px-6 ">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-4">Feel free to reach out to me at:</p>
        <a href="mailto:your.email@example.com" className="">
          <img src="/assets/mail.png" alt="email" className="w-7 h-7 inline "/>
          Email: sayasing00@gmail.com
        </a>
        <a href="https://github.com/xser56"
        target="_blank" 
        rel="noopener noreferrer"> <img src="/assets/githublogo.png" alt="git logo" className="w-5 h-5 inline "/> Githib: xser56</a>
      </section>

    </div>
  );
}
