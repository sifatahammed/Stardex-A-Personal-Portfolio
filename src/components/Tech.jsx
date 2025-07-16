import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, aiFrameworks } from "../constants";
import { styles } from '../styles';
import { services } from '../constants';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="w-28 h-28" key={name}>
      <BallCanvas icon={icon} />
      <h4 className="mt-2 text-center text-sm font-medium">{name}</h4>
    </div>
  ));
};

const renderaiFrameworks = () => {
  return aiFrameworks.map(({ name, icon }) => (
    <div className="w-28 h-28" key={name}>
      <BallCanvas icon={icon} />
      <h4 className="mt-2 text-center text-sm font-medium">{name}</h4>
    </div>
  ));
};

const Tech = () => (
  <>
    <h2 className={`${styles.sectionHeadText} text-center`}>Technical Skills</h2>
    <p className="text-center text-secondary text-[17px] max-w-3xl mx-auto mt-2">
      A snapshot of my programming expertise, development tools, and AI/ML frameworks I've worked with.
    </p>
    <h5 className={`${styles.sectionHeadText2} mt-5 mb-5 text-center`}>Programming Languages</h5>
    <p className="text-center text-secondary text-sm max-w-xl mx-auto mb-5">
      Languages I've used for software development, algorithms, and data structures.
    </p>
    <div className="mt-10 mb-8 flex flex-wrap justify-center gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>

    <h5 className={`${styles.sectionHeadText2} mt-16 mb-5 text-center`}>Web Development Technologies</h5>
    <p className="text-center text-secondary text-sm max-w-xl mx-auto mb-5">
      Tools and frameworks I use for building responsive, interactive web applications.
    </p>
    <div className="flex flex-row flex-wrap justify-center gap-10">  
      {renderTechnologies()}   
   </div>
    <h5 className={`${styles.sectionHeadText2} mt-16 mb-5 text-center`}>AI & Machine Learning Frameworks</h5>
    <p className="text-center text-secondary text-sm max-w-xl mx-auto mb-5">
      Libraries and tools I've used for machine learning, deep learning, and data analysis projects.
    </p>
   <div className="flex flex-row flex-wrap justify-center gap-10">  
      {renderaiFrameworks()}
   </div>
   
  </>
);

export default SectionWrapper(Tech, "skill");
