import React from "react";

const MiddleSection = () => (
  <section className="relative flex flex-col items-center justify-center w-full min-h-screen p-10 text-white bg-dark">
    {/* Section Title */}
    <h1 className="text-4xl font-bold text-center text-yellowApp m-20">Services We Provide</h1>

    {/* Content Container */}
    <div className="relative flex flex-col md:flex-row items-center w-2/3 bg-footerBrown rounded-lg p-10 shadow-lg">
      
      {/* Left Side - Home Renovations */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <h3 className="text-2xl font-bold text-yellowApp">Home Renovations</h3>
        <ul className="text-yellowApp text-lg list-disc space-y-3 mt-4 pl-6">
          <li>Construction</li>
          <li>Renovations & Upgrades</li>
          <li>Building Maintenance</li>
          <li>Project Management</li>
          <li>Mechanical & Plumbing Integration</li>
        </ul>
      </div>

      {/* SVG to the Right of First List */}
      <div className="hidden md:flex justify-center items-center w-1/2">
        <img src="/images/homePage/Svgs/home_renovations.svg" alt="Home Renovation Icon" className="w-40 h-40 md:w-64 md:h-64" />
      </div>
    </div>

    {/* Bottom Section */}
    <div className="relative flex flex-col md:flex-row items-center w-2/3 bg-footerBrown rounded-lg p-10 shadow-lg mt-10">
      
      {/* Bottom Left SVG */}
      <div className="hidden md:flex justify-center items-center w-1/2">
        <img src="/images/homePage/Svgs/engineer.svg" alt="Engineer Icon" className="w-40 h-40 md:w-64 md:h-64" />
      </div>

      {/* Right Side - Additional Services */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <h3 className="text-2xl font-bold text-yellowApp">Additional Services</h3>
        <ul className="text-yellowApp text-lg list-disc space-y-3 mt-4 pl-6">
          <li>Interior & Exterior Design</li>
          <li>Energy Efficiency Upgrades</li>
          <li>Custom Carpentry</li>
          <li>Smart Home Installations</li>
          <li>Electrical & HVAC Systems</li>
        </ul>
      </div>
    </div>
  </section>
);

export default MiddleSection;
