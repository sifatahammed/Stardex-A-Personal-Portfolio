import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import demop from "../assets/demo.png"

const ProjectCard = ({ name, description, tags, image, source_code_link, demo }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 5,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 flex gap-3 justify-end items-center px-3 py-2 card-img_hover">
        <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"   
          className="bg-black w-11 h-11 rounded-full flex justify-center items-center cursor-pointer border border-white
          transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_2px_rgba(0,255,0,0.5)]"
        >
          <img
            src={github}
            alt="source code"
            className="w-10 h-10 object-contain"
          />
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"            
            className="bg-white w-11 h-8 rounded-full flex justify-center items-center cursor-pointer border-2 border-black 
            transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_2px_rgba(0,255,0,0.5)]"
          >
            <img
              src={demop} // Replace with your actual demo icon
              alt="demo"
              className="w-10 h-8 object-contain"
            />
          </a>
        )}
      </div>
    </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
