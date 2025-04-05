import React from "react";
import Image from "next/image";

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center w-full h-screen p-10">
    <div className="absolute inset-0 w-full h-full">
      <Image className="opacity-25"
        src="/images/homePage/HeroSection/HeroSectionImage.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
    </div>
    {/* Overlay for better text visibility */}
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

    {/* Content */}
    <div className="relative z-10">
      <div className="mb-4">
        <h1 className="text-5xl font-bold text-yellowApp">Welcome to Cloghala Homes</h1>
      </div>
    </div>
  </section>
);

export default HeroSection;

