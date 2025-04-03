"use client";
import React from "react";
import { motion } from "framer-motion";

const TopMidSection = () => (
  <section className="relative w-full bg-dark px-6 md:px-10 py-16 font-montserrat flex justify-center">
    <div className="flex justify-center w-full md:w-2/3 mt-10 mb-10">
      {/* 🟨 Text Block with Animation */}
      <motion.div
        className="bg-yellowApp text-black p-6 md:p-10 rounded-2xl shadow-lg flex flex-col justify-center w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold">What sets us apart?</h2>
        <ul className="list-none p-0 mt-4 space-y-3 text-lg md:text-2xl leading-relaxed">
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            End-to-end solution specialists
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Client-centric approach
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Open and transparent processes
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Over 30 years of experience
          </motion.li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default TopMidSection;
