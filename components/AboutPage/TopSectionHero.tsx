"use client";
import React from "react";
import { motion } from "framer-motion";
import { historyParagraph, historyTitle } from "../../common/constants/constants";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const TopHeroSection = () => (
  <section className="flex flex-col md:flex-row lg:min-h-screen mg:min-h-screen w-full font-montserrat">
    {/* Left Side - Our History Section */}
    <motion.div
      className="w-full md:w-1/2 h-auto bg-dark flex flex-col items-center justify-center p-6 sm:p-10 text-yellowApp mt-20 md:mt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center sm:text-center text-yellowApp"
        variants={fadeInLeft}
        custom={0}
      >
        {historyTitle}
      </motion.h2>
      <motion.p
        className="mt-4 text-center sm:text-center text-sm sm:text-base"
        variants={fadeInLeft}
        custom={1}
      >
        {historyParagraph}
      </motion.p>
    </motion.div>

    {/* Right Side - We Provide Section */}
    <motion.div
      className="w-full md:w-1/2 bg-yellowApp flex flex-col items-center justify-center p-6 sm:p-10 md:rounded-bl-heroCustom-bl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.ul
      className="text-black text-xl sm:text-2xl text-center sm:text-center space-y-4 sm:w-3/4"
      variants={fadeInRight}
      custom={2}
      >
      <motion.h3
        className="font-bold text-center"
        variants={fadeInRight}
        custom={3}
      >
        We Provide
      </motion.h3>
      {[
        "Construction",
        "Renovations & Upgrades",
        "Building Maintenance",
        "Project Management",
        "Mechanical & Plumbing Integration",
      ].map((item, index) => (
        <motion.li key={index} variants={fadeInRight} custom={index + 4}>
        {item}
        </motion.li>
      ))}
      </motion.ul>
    </motion.div>
  </section>
);

export default TopHeroSection;
