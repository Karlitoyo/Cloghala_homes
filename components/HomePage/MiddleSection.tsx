"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const MiddleSection = () => (
  <section className="relative flex flex-col items-center justify-center w-full min-h-screen p-10 text-white bg-dark">
    {/* Section Title */}
    <motion.h1
      className="text-4xl font-bold text-center text-yellowApp m-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={0}
    >
      Services We Provide
    </motion.h1>

    {/* First Service Block */}
    <motion.div
      className="relative flex flex-col md:flex-row items-center w-2/3 bg-footerBrown rounded-lg p-10 shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={1}
    >
      {/* Left Side - Home Renovations */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        variants={fadeInUp}
        custom={2}
      >
        <h3 className="text-2xl font-bold text-yellowApp">Home Renovations</h3>
        <ul className="text-yellowApp text-lg md:list-disc space-y-3 mt-4 pl-0 md:pl-6">
          {[
            "Construction",
            "Renovations & Upgrades",
            "Building Maintenance",
            "Project Management",
            "Mechanical & Plumbing Integration",
          ].map((item, index) => (
            <motion.li key={index} variants={fadeInUp} custom={index + 3} className="list-none md:list-disc">
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* SVG Image */}
      <motion.div
        className="hidden md:flex justify-center items-center w-1/2"
        variants={fadeInUp}
        custom={8}
      >
        <Image
          src="/images/homePage/Svgs/home_renovations.svg"
          alt="Home Renovation Icon"
          width={256}
          height={256}
          className="w-40 h-40 md:w-64 md:h-64"
        />
      </motion.div>
    </motion.div>

    {/* Second Service Block */}
    <motion.div
      className="relative flex flex-col md:flex-row items-center w-2/3 bg-footerBrown rounded-lg p-10 shadow-lg mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={9}
    >
      {/* SVG Image */}
      <motion.div
        className="hidden md:flex justify-center items-center w-1/2"
        variants={fadeInUp}
        custom={10}
      >
        <Image
          src="/images/homePage/Svgs/engineer.svg"
          alt="Engineer Icon"
          width={256}
          height={256}
          className="w-40 h-40 md:w-64 md:h-64"
        />
      </motion.div>

      {/* Right Side - Additional Services */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        variants={fadeInUp}
        custom={11}
      >
        <h3 className="text-2xl font-bold text-yellowApp">Additional Services</h3>
        <ul className="text-yellowApp text-lg md:list-disc space-y-3 mt-4 pl-0 md:pl-6">
          {[
            "Interior & Exterior Design",
            "Energy Efficiency Upgrades",
          ].map((item, index) => (
            <motion.li key={index} variants={fadeInUp} custom={index + 12} className="list-none md:list-disc">
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  </section>
);

export default MiddleSection;
