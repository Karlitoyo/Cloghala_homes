"use client";
import React from "react";
import Image from "next/image";
import { imageArray } from "../../common/constants/constants";
import { motion } from "framer-motion";

const TopMidSection = () => (
  <section className="relative w-full bg-dark px-6 md:px-10 py-16 font-montserrat">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* 🔼 Top Image Grid - Spanning 3 Columns on Desktop, 2 Columns on Mobile */}
      <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-full aspect-square relative">
            <Image
              src={imageArray[i % imageArray.length].src}
              alt={imageArray[i % imageArray.length].alt || `Work ${i + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* 🟨 Text Block with Animation */}
      <motion.div
        className="md:col-span-2 bg-yellow-200 text-black p-6 md:p-10 rounded-lg shadow-lg flex flex-col justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          What sets us apart?
        </h2>
        <ul className="list-disc pl-5 mt-4 space-y-3 text-lg md:text-2xl leading-relaxed">
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Worked on over 1500 projects
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
            50 years of business
          </motion.li>
        </ul>
      </motion.div>


      {/* 📸 Right-Side Image Grid - Responsive Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-full aspect-square relative">
            <Image
              src={imageArray[i % imageArray.length].src}
              alt={imageArray[i % imageArray.length].alt || `Work ${i + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TopMidSection;
