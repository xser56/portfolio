"use client";

import Hero from "./Components/Sections/HeroComponent";
import Navbar from "./Components/Sections/NavbarComponent";
import AboutComponent from "./Components/Sections/AboutComponent";
import Projects, {
  ProjectProps,
} from "./Components/Sections/PojectsComponents";
import staticProjectData from "./data/staticWebsites.json";
import apiProjectsData from "./data/apiProjects.json";
import technicalProjects from "./data/technicalProjects.json";
import fullstackData from "./data/fullstack.json";
import { useState } from "react";

export default function Home() {
  const staticProjectsArr: ProjectProps[] = staticProjectData as ProjectProps[];
  const apiProjectArr: ProjectProps[] = apiProjectsData as ProjectProps[];
  const technicalProjectsArr: ProjectProps[] =
  technicalProjects as ProjectProps[];
  const fullStackArr: ProjectProps[] = fullstackData as ProjectProps[];

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionName: string) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from- via-gray-50 to-gray-200">
      <Navbar />
      <Hero />

      <section id="about" className=" pb-10 mb-8  border-bottom shadow-2xl">
        <AboutComponent
          title={"About Me"}
          image={"/assets/me1.png"}
          imageAlt={"Andrew"}
          description={
            "Hello, my name is Andrew Sayasing. I am a Full Stack Junior Web Developer who studied and graduated from CodeStack Acedemy located in Stockton, California. Fresh to the scene, im looking to further develop my skills in a professional environment! My stack includes "
          }
        />

        
      </section>

      {/* Projects */}
     <section className="mx-2">
      <h1 className="text-3xl  pt-5 mb-8 flex justify-center" id="fullstack">Projects</h1>

      {/* Full Stack */}
      <div className="">
        <h2 
          onClick={() => toggleSection("fullstack")}
          className="cursor-bg-gray-400/20 bg-gray-200 hover:bg-gray-300/20 cursor-pointer px-4 py-2 rounded-md mb-2"
        >
          Full Stack Applications
        </h2>
        {openSection === "fullstack" && (
          <div className="grid grid-cols-3 gap-4">
            {fullStackArr.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
        )}
      </div>

      {/* API */}
      <div id="api">
        <h2 
          onClick={() => toggleSection("api")}
          className="cursor-bg-gray-400/20 bg-gray-200 hover:bg-gray-300/20 cursor-pointer  px-4 py-2 rounded-md mb-2"
        >
          API Applications
        </h2>
        {openSection === "api" && (
          <div className="grid grid-cols-3 gap-4">
            {apiProjectArr.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
        )}
      </div>

      {/* Static */}
      <div id="static">
        <h2 
          onClick={() => toggleSection("static")}
          className="cursor-bg-gray-400/20 bg-gray-200 hover:bg-gray-300/20 cursor-pointer  px-4 py-2 rounded-md mb-2"
        >
          Static Webpages
        </h2>
        {openSection === "static" && (
          <div className="grid grid-cols-3 gap-4">
            {staticProjectsArr.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
        )}
      </div>

      {/* Technical */}
      <div id="tech">
        <h2 
          onClick={() => toggleSection("technical")}
          className="cursor-bg-gray-400/20 bg-gray-200 hover:bg-gray-300/20 cursor-pointer  px-4 py-2 rounded-md mb-2"
        >
          Technical Applications
        </h2>
        {openSection === "technical" && (
          <div className="grid grid-cols-3 gap-4">
            {technicalProjectsArr.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>

      {/* Contact  */}
      <section
        id="contact"
        className="py-5 mx-auto px-6 bg-gray-200 mt-10 font-serif"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-md mb-4">Feel free to reach out to me at:</p>
        <div className="flex items-center place-content-start">
            <img
              src="/assets/mail.png"
              alt="email"
              className="w-5 h-5 me-1 inline "
            />
          <a href="mailto:sayasing00@gmail.com" className="">
            Email: <span className="hover:text-blue-600">sayasing<span className="font-serif">00</span>@gmail.com </span> 
          </a>
        </div>
        <div className="flex items-center ">
            {" "}
            <img
              src="/assets/githublogo.png"
              alt="git logo"
              className="w-5 h-5 inline me-1 "
            />{" "}
          <a
            href="https://github.com/xser56"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github: <span className="hover:text-amber-700">xser56 </span> 
          </a>
        </div>
        <div className="flex items-center place-content-start">
            <img
              src="/assets/linked.png"
              alt="email"
              className="w-5 h-5 me-1 inline "
            />
          <a href="https://www.linkedin.com/in/andrew-sayasing-478999350/" className=""
          target="_blank"
            rel="noopener noreferrer">
            Linkedin: <span className="hover:text-blue-600">Andrew Sayasing</span> 
          </a>
        </div>
      </section>
    </div>
  );
}
