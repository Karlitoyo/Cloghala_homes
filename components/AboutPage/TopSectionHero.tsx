import React from "react";
import { historyParagraph, historyTitle } from "../../common/constants/constants";

const TopHeroSection = () => (
  <section className="flex flex-col md:flex-row min-h-screen w-full font-montserrat">
    {/* Left Side - Our History Section */}
    <div className="w-full md:w-1/2 h-auto bg-dark flex flex-col items-center justify-center p-6 sm:p-10 text-yellowApp mt-20 md:mt-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-yellowApp">{historyTitle}</h2>
      <p className="mt-4 text-center sm:text-left text-sm sm:text-base">{historyParagraph}</p>
    </div>

    {/* Right Side - We Provide Section */}
    <div className="w-full md:w-1/2 bg-yellowApp flex flex-col items-center justify-center p-6 sm:p-10 md:rounded-bl-heroCustom-bl">
      <ul className="text-black text-xl sm:text-2xl list-disc space-y-4 sm:w-3/4">
        <h3 className="font-bold text-center sm:text-left">We Provide:</h3>
        <li>Construction</li>
        <li>Renovations & Upgrades</li>
        <li>Building Maintenance</li>
        <li>Project Management</li>
        <li>Mechanical & Plumbing Integration</li>
      </ul>
    </div>
  </section>
);

export default TopHeroSection;
