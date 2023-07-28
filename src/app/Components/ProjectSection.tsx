import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Velp - Volunteer Today, Inspire Tomorrow",
    description:
      "Velp is an android application that connects volunteers with organizations in need.",
    image: "/Velp.png",
    github: "https://github.com/code-emad/NC-velp-final-project",
    link: "https://github.com/code-emad/NC-velp-final-project",
  },
  {
    name: "Backend - House of Games",
    description:
      "An API for the purpose of accessing application data programmatically. Created by using Express.js.",
    image: "/BE-House-of-Games.png",
    github: "https://github.com/code-emad/BE-House-Of-Games",
    link: "https://emads-be-project.onrender.com/api",
  },
  {
    name: "Frontend - House of Games",
    description:
      "An user interface to allow users to interact with the House of Games API.",
    image: "/FE-House-of-Games.png",
    github: "https://github.com/code-emad/FE-House-Of-Games",
    link: "https://emads-first-fe-proj-houseofgames.netlify.app/",
  },
  {
    name: "Mini-App - Random Team Generator",
    description:
      "A user interface that allows users to randomly generate two teams of 7. Featuring responsive design.",
    image: "/Randomteamgenerator.png",
    github: "https://github.com/code-emad/RandomTeamGenerator",
    link: "https://emads-random-team-generator.netlify.app/",
  },
  {
    name: "Mini-App - Tic Tac Toe",
    description:
      "A tic tac toe game created using React. Featuring responsive design.",
    image: "/Tictactoe.png",
    github: "https://github.com/code-emad/tictactoe",
    link: "https://emadstictactoegame.netlify.app/",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 ">
        {projects.map((project, inx) => {
          return (
            <div key={inx}>
                <SlideUp offset="300px 0px -300px 0px">
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                    <Link href={project?.link} target="_blank">
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                    </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 dark:text-neutral-100 text-neutral-600 ">{project.description}</p>
                    <div className="flex flex-row allign-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                        </Link>
                        <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                        </Link>
                    </div>
                </div>
              </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
