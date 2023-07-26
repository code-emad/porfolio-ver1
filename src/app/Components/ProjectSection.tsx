import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
      name: "Project 1",
      description:
        "Project 1 is a web app that generates an appreciative sentence of something or someone you are thankful for.",
      image: "/thankfulthoughts.png",
      github: "https://github.com/hqasmei/thankful-thoughts",
      link: "https://thankfulthoughts.io/",
    },
    {
      name: "Project 2",
      description: "Project 2 is a to do list app that built using the PERN stack.",
      image: "/platoio.png",
      github: "https://github.com/hqasmei/platoio",
      link: "https://platoio.com/register",
    },
    {
      name: "Project 3",
      description:
        "Project 3 Photos is a photos and video digitization service in the LA area.",
      image: "/familyphotos.png",
      github: "https://github.com/hqasmei/katorfamilyphotos",
      link: "https://katorfamilyphotos.com/",
    },
  ]

const ProjectSection = () => {
  return (
    <div>ProjectSection</div>
  )
}

export default ProjectSection