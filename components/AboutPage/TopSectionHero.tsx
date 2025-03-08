import React from "react";
import { historyParagraph, historyTitle } from "../../common/constants/constants";

const TopHeroSection = () => (
    <section className="flex flex-col md:flex-row h-screen w-full font-montserrat">
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-full bg-dark flex flex-col items-center justify-center text-white p-10 text-yellowApp">
            <h2 className="text-3xl font-bold text-yellowApp">{historyTitle}</h2>
            <p className="mt-4">{historyParagraph}</p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 h-full bg-yellowApp flex items-center justify-center text-white p-10 rounded-bl-heroCustom-bl">
            <ul className="text-black">
                <li >We Provide:</li>
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

