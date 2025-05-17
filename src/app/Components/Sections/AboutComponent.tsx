import React from "react";
import Image from "next/image";

interface AboutProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const AboutComponent = ({
  title,
  description,
  image,
  imageAlt,
}: AboutProps) => {
  return (
    <main className="flex flex-col-2 justify-around font-serif">
      <section className="pt-10">
        <div>
          <h1 className="text-[40px]">
            {title}
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRuQn2oMQ1vkM8qDeCUhkgJJq1_yBz47Rp-E-2HwihfH8wb9ijolcuu2gCpPZuPLkJBZyszjNCfHM26/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block"
            >
              <Image
                src="/assets/resume-7.svg"
                alt="resume"
                width={500}
                height={300}
                className="w-10 h-10 relative bottom-[4px] ms-2 inline"
              />

              {/* pop up */}
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Resume
              </span>
            </a>
          </h1>
          <p className="text-[16px] max-w-2xl flex ">{description}</p>
        </div>

        <section className="grid grid-cols-2 gap-50 mt-10">
          <div>
            <h1 className="font-bold">Frontend Development:</h1>
            <li>Next.js</li>
            <li>React Native</li>
            <li>Tailwind CSS</li>
            <li>Fully Responsive design</li>
            <li>Vite / Vue</li>
            <li>Bootstrap / ShadCN / FlowBite</li>
          </div>

          <div>
            <h1 className="font-bold">Backend Development:</h1>
            <li>C#</li>
            <li>EF Core .NET Entity Framework</li>
            <li>Controller / Routing</li>
            <li>JWT Token salt/hash</li>
            <li>SQL Data Management</li>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-50 mt-10">
          <div>
            <h1 className="font-bold">Deployment and infostructer:</h1>
            <li>Microsoft Azure Cloud Services</li>
            <li>Vercel</li>
            <li>Github</li>
          </div>

          <div className="">
            <h1 className="font-bold">Tools:</h1>
            <li>Figma</li>
            <li>Postman</li>
            <li>AI Prompting</li>
          </div>
        </section>
      </section>

      <section className=" text-black  flex justify-center items-center pt-10">
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={300}
          className=""
        />
      </section>
    </main>
  );
};

export default AboutComponent;
