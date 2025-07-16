import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import Typewriter from "typewriter-effect";
import {logo } from '../assets';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="mt-10 px-6"
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className={`${styles.sectionHeadText} mb-2 text-center`}>Education</h2>

      <div className="mt-5 flex flex-col gap-5">
        {/* University */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="bg-tertiary p-5 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-white">
            B.Sc. in Computer Science and Engineering
          </h3>
          <p className="text-secondary mt-1">North Western University, Bangladesh</p>
          <p className="text-secondary text-sm mt-1">Graduated: 2024</p>
          <p className="text-sm text-gray-400 mt-2">
            Relevant Coursework: AI/ML, Algorithms, Data Structures, NLP, Cybersecurity
          </p>
        </motion.div>

        {/* HSC */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="bg-tertiary p-5 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-white">
            Higher Secondary Certificate (HSC)
          </h3>
          <p className="text-secondary mt-1">Govt. Majeed Memorial City College, Khulna, Bangladesh</p>
          <p className="text-secondary text-sm mt-1">Graduated: 2019</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      {/* Left Column: Text + Typewriter */}
      <div className="flex-1">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} mt-5 mb-4`}>Overview</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sifat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do{" "}
            <span className="text-[#915EFF]">
              <Typewriter
                options={{
                  strings: ["Full-Stack", "AI & ML", "NLP"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1000,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a Computer Science graduate and full-stack developer with a strong
          grasp of modern front-end technologies like React, JavaScript, and
          Tailwind CSS, as well as backend tools including Node.js and MongoDB.
          I also bring experience in AI and machine learning, having worked on
          projects in healthcare and emotion recognition. As a freelance
          developer, I've built 10+ responsive, SEO-optimized web apps with API
          integrations like Google Maps and Stripe. I'm eager to join a company
          that values innovation, collaboration, and continuous learning, where
          I can grow and contribute through both my development and AI
          expertise.
        </motion.p>
      </div>

      {/* Optional Right Column: Could be a photo, 3D model, etc. */}
       <div className="flex-1">
        {/* <img src={logo} alt="Sifat" className="w-48 h-48 object-cover rounded-xl shadow-lg flex justify-center items-center	" /> */}
      <Education /></div> 

      
    </div>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
