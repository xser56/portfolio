"use client";

import Image from 'next/image';
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
    <div className="min-h-screen bg-gradient-to-b from- via-gray-50 to-gray-100">
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
      <section className="mx-2 font-serif ">
        <h1 className="text-3xl font-light pt-5 ps-5 mb-8  " id="fullstack">
          Projects
        </h1>

        {/* Full Stack */}
        <div className="">
          <h2
            onClick={() => toggleSection("fullstack")}
            className="cursor-bg-gray-400/20 bg-gray-200/20 hover:bg-gray-300/20 cursor-pointer px-4 py-2 rounded-md mb-2 group"
          >
            Full stack{" "}
            <span
              className={`text-[13px] inline-block transition-all duration-1000 ${
                openSection === "fullstack"
                  ? "opacity-100 translate-x-6"
                  : "opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-6"
              }`}
            >
              Full stack applications with both fully developt Frontend &
              Backend
            </span>
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
            className="cursor-bg-gray-400/20 bg-gray-200/20 hover:bg-gray-300/20 cursor-pointer px-4 py-2 rounded-md mb-2 group"
          >
            Frontend APIs{" "}
            <span
              className={`text-[13px] inline-block transition-all duration-1000 ${
                openSection === "api"
                  ? "opacity-100 translate-x-6"
                  : "opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-6"
              }`}
            >
              Frontend projects that pull from a pre-existing API
            </span>
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
            className="cursor-bg-gray-400/20 bg-gray-200/20 hover:bg-gray-300/20 cursor-pointer px-4 py-2 rounded-md mb-2 group"
          >
            Static Webpages{" "}
            <span
              className={`text-[13px] inline-block transition-all duration-1000 ${
                openSection === "static"
                  ? "opacity-100 translate-x-6"
                  : "opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-6"
              }`}
            >
              Static web pages with simple HTML and CSS
            </span>
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
            className="cursor-bg-gray-400/20 bg-gray-200/20 hover:bg-gray-300/20 cursor-pointer px-4 py-2 rounded-md mb-2 group"
          >
            Technical Applications{" "}
            <span
              className={`text-[13px] inline-block transition-all duration-1000 ${
                openSection === "technical"
                  ? "opacity-100 translate-x-6"
                  : "opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-6"
              }`}
            >
              Projects focused more on logic and functionality
            </span>
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
        className="py-5  rounded-2xl bg-gradient-to-b from-gray-100/20 to-gray-200/30
 mt-10 font-serif"
      >
        <div className="flex flex-col items-center  mb-6">
          <h2 className="text-3xl font-light">Contact</h2>
          <p className="text-[16px] font-semibold mt-2">
            Feel free to reach out at
          </p>
        </div>

        <div className="flex justify-center text-">
          <div className="">
            {/* Email */}
            <div className="flex items-center">
  <Image
    src="/assets/mail.png"
    alt="email"
    width={24}
    height={24}
    className="w-6 h-6 relative right-[2px] me-1"
  />
  <a href="mailto:sayasing00@gmail.com">
    Email:{" "}
    <span className="hover:text-gray-400">
      sayasing<span className="font-serif">00</span>@gmail.com
    </span>
  </a>
</div>

{/* GitHub */}
<div className="flex items-center">
  <Image
    src="/assets/githublogo.png"
    alt="git logo"
    width={20}
    height={20}
    className="w-5 h-5 me-2"
  />
  <a
    href="https://github.com/xser56"
    target="_blank"
    rel="noopener noreferrer"
  >
    Github: <span className="hover:text-gray-400">xser56</span>
  </a>
</div>

{/* LinkedIn */}
<div className="flex items-center">
  <Image
    src="/assets/linked.png"
    alt="LinkedIn"
    width={20}
    height={20}
    className="w-5 h-5 me-2"
  />
  <a
    href="https://www.linkedin.com/in/andrew-sayasing-478999350/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Linkedin:{" "}
    <span className="hover:text-gray-400">Andrew Sayasing</span>
  </a>
</div>

{/* Phone */}
<div className="flex items-center">
  <Image
    src="/assets/phone.png"
    alt="phone"
    width={20}
    height={20}
    className="w-5 h-5 me-2"
  />
  <p>
    Phone: <span className="hover:text-gray-400">209-905-3403</span>
  </p>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}
