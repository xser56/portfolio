"use client"

import Image from "next/image";
import Hero from "./Components/Sections/HeroComponent";
import Navbar from "./Components/Sections/NavbarComponent";
import Projects from "./Components/Sections/PojectsComponents";
import TextReveal from "./Components/Animation/TypingEffectComponent";
import { motion } from "framer-motion";
import TitleComponent from "./Components/UI/TitleComponent";
import AnimatedBackground from "./Components/Animation/AnimatedBackgroundHero";
import AboutComponent from "./Components/Sections/AboutComponent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section>
      <AboutComponent 
        title={"About Me"} 
        image={"/assets/me.png"} 
        imageAlt={"Andrew"}
        description={"Hello, my name is Andrew Sayasing. I am a Full Stack  Junior Web Developer who studied and graduated from CodeStack Acedemy  located in Stockton, California."} 
        />
      </section>      
      
      {/* <h1 className="text-3xl font-semibold ps-5">Projects</h1>
      <section className="bg-stone-500/20 mt-10 flex flex-col-3 space-x-3 justify-around h-[400px]">
          <div className="">
          Projects
        </div>
        <div>
          Technical Project
        </div>
        <div>
          Static WebPages
        </div>
      </section> */}

      <Projects title={"Weather App"} projectImg={"/assets/weatherTracker.png"} projectVercel={""} projectImgAlt={"Weather TrackerApp"} projectDescription={"This is a weather tracker app that has the user input a city or location from the Open Weather API and gives back data on the locations weather"} />

    {/* 3 Sections 
      Map through the different projects

      Full stack + Poke Api

      Technical - Calculator, Goals list, Some other

      Static Site - Business Redesign, Hamster hotel, Cookware
    */}
      {/* Contact  */}
      <section id="contact" className="py-5 container mx-auto px-6 ">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-4">Feel free to reach out to me at:</p>
        <a href="mailto:your.email@example.com" className="">
          Email: sayasing00@gmail.com
        </a>
        <a href="">
          Githib: xser56
        </a>
      </section>
    </div>
  );
}
