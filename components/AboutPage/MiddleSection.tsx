"use client";
import React from "react";
import { IconType } from "react-icons";
import {
  FaIndustry,
  FaTools,
  FaRegLightbulb,
  FaHandshake,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

// Define service details
const servicesIcons: { icon: IconType; title: string; content: string }[] = [
  {
    icon: FaIndustry,
    title: "Industry Expertise & Proven Track Record",
    content:
      "With a solid foundation in plumbing, mechanical services, and construction, we have built a reputation for precision, efficiency, and high-quality craftsmanship. Our experienced team ensures that every project—from new builds to renovations and maintenance—meets the highest industry standards.",
  },
  {
    icon: FaTools,
    title: "End-to-End Solutions Under One Roof",
    content:
      "We provide a seamless, hassle-free experience by managing all aspects of construction, project management, mechanical services, and sustainable heating. This means fewer subcontractors, streamlined communication, and a smoother process for our clients.",
  },
  {
    icon: FaRegLightbulb,
    title: "Commitment to Quality & Innovation",
    content:
      "We utilize modern construction techniques, cutting-edge technology, and premium materials to deliver durable, energy-efficient, and high-performance solutions. Whether building homes or upgrading heating systems with Heat Pump Pro, we prioritize innovation and sustainability in every project.",
  },
  {
    icon: FaHandshake,
    title: "Reliability & Transparency",
    content:
      "We believe in honest communication, fair pricing, and delivering on our promises. Our team works closely with clients, ensuring full transparency from project initiation to completion, with no hidden surprises—just high-quality results.",
  },
  {
    icon: FaLeaf,
    title: "Sustainable & Energy-Efficient Solutions",
    content:
      "Through Heat Pump Pro, we integrate renewable energy technologies into our construction projects, helping homeowners and businesses reduce their carbon footprint and energy costs. Our focus on sustainable building and heating aligns with modern energy efficiency goals and environmental responsibility.",
  },
  {
    icon: FaUsers,
    title: "Strong Client & Community Relationships",
    content:
      "We don't just build projects—we build long-term relationships with clients, contractors, and local communities. Our reputation is built on trust, reliability, and a commitment to exceeding expectations on every project we undertake.",
  },
];

const MiddleSection = (): JSX.Element => (
  <section className="w-full bg-dark px-6 md:px-10 py-16 text-white font-montserrat">
    {/* Section Title */}
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-yellowApp">Our Key Services</h2>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
      {servicesIcons.map((service, index) => {

        const IconComponent = service.icon;
        return (
          <div
            key={index}
            className="p-6 footerBrown rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              {React.createElement(IconComponent, { size: 40, className: "text-yellowApp" })}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-yellowApp text-opacity-70">{service.content}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default MiddleSection;
