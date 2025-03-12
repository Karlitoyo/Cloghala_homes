"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {testimonials} from "../../common/constants/constants";

const BottomSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-dark px-10 py-16 text-white flex flex-col items-center">
      {/* Title Above Testimonials */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-yellowApp">What clients say about us</h2>
      </div>

      {/* Centered Testimonial Carousel */}
      <div className="relative p-6 rounded-lg shadow-lg w-full max-w-2xl bg-yellowApp bg-opacity-15 flex flex-col items-center">
        {/* Animated Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg italic mb-4">"{testimonials[currentIndex].text}"</p>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={24}
                className={`${
                  index < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomSection;