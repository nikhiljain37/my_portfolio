import Image from "next/image";
import React from "react";
import dragon from "@/assets/Dragon.png";
import SkillsCard from "./SkillsCard";
import moon from "@/assets/moon.png";
import java from "@/assets/java.png";
import html from "@/assets/html.png";
import css from "@/assets/css.png";
import js from "@/assets/js.png";
import ts from "@/assets/ts.png";
import reactjs from "@/assets/react.png";
import nextjs from "@/assets/nextjs.jpeg";
import tailwind from "@/assets/tailwind.png";
import ProjectsCard from "./ProjectsCard";

const skillItems = [
  { url: "https://www.w3schools.com/java/", icon: java, label: "JAVA" },
  { url: "https://www.w3schools.com/html/", icon: html, label: "HTML" },
  { url: "https://www.w3schools.com/css/", icon: css, label: "CSS" },
  { url: "https://www.w3schools.com/js/", icon: js, label: "JavaScript" },
  {
    url: "https://www.typescriptlang.org/docs/",
    icon: ts,
    label: "TypeScript",
  },
  { url: "https://react.dev/learn", icon: reactjs, label: "ReactJS" },
  { url: "https://nextjs.org/", icon: nextjs, label: "NextJS" },
  { url: "https://tailwindcss.com/", icon: tailwind, label: "TailwindCSS" },
];

const Intro = () => {
  return (
    <div className="mx-5 md:mx-[13%] lg:mx-[21%]">
      {/* Hero Section */}
      <section className="mt-10 flex flex-wrap">
        <div className="w-full lg:w-3/5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide mb-5 font-bold">
            Hey, I&apos;m Nikhil
          </h1>
          <p className="mt-2 text-lg sm:text-xl tracking-wide antialiased text-left leading-8">
            Final year BTech student, thrilled by front-end development -
            building visually stunning, user-friendly websites.
          </p>
          <p className="mt-3 text-lg sm:text-xl tracking-wide antialiased text-left leading-8">
            Welcome to my digital garden. 🌱
          </p>
        </div>
        <div className="w-full lg:w-2/5 mt-5 lg:mt-0">
          <Image
            src={dragon}
            alt="Dragon"
            className="w-full h-auto sm:w-1/2 lg:w-full mx-auto"
          />
        </div>
      </section>

      {/* Skills Section */}

      <section>
        <div className="mt-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide mb-5 font-bold">
            Skills
          </h1>
          <div className="flex flex-wrap justify-center">
            {skillItems.map((item) => (
              <div key={item.label} className="w-1/3 sm:w-1/2 px-2 -mb-8">
                <SkillsCard
                  img={item.icon.src}
                  skill={item.label}
                  url={item.url}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}

      <section>
        <div className="mt-24">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide mb-5 font-bold">
            Projects
          </h1>
          <ProjectsCard/>
        </div>
      </section>


    </div>
  );
};

export default Intro;
