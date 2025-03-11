"use client";
import React from "react";
import { IconType } from "react-icons";
import { FaIndustry, FaTools, FaRegLightbulb, FaHandshake, FaLeaf, FaUsers } from "react-icons/fa";


const servicesIcons: { icon: IconType, title: string }[] = [
  { icon: FaIndustry, title: "Industry Expertise" },
  { icon: FaTools, title: "End-to-End Solutions" },
  { icon: FaRegLightbulb, title: "Quality & Innovation" },
  { icon: FaHandshake, title: "Reliability" },
  { icon: FaLeaf, title: "Sustainable Solutions" },
  { icon: FaUsers, title: "Community Relationships" }
];

const MiddleSection = () => (
<section className="w-full bg-dark px-10 py-16 text-white font-montserrat text text-yellowApp">
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-4xl font-bold">Our Key Services</h2>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-40 mt-40">
    
    {/* Text Fields (6 total, 3 per row) */}
    {servicesIcons.map((service, index) => {
      const item = [
      { title: "Industry Expertise & Proven Track Record", content: "With a solid foundation in plumbing, mechanical services, and construction, we have built a reputation for precision, efficiency, and high-quality craftsmanship. Our experienced team ensures that every project—from new builds to renovations and maintenance—meets the highest industry standards." },
      { title: "End-to-End Solutions Under One Roof", content: "We provide a seamless, hassle-free experience by managing all aspects of construction, project management, mechanical services, and sustainable heating. This means fewer subcontractors, streamlined communication, and a smoother process for our clients." },
      { title: "Commitment to Quality & Innovation", content: "We utilize modern construction techniques, cutting-edge technology, and premium materials to deliver durable, energy-efficient, and high-performance solutions. Whether building homes or upgrading heating systems with Heat Pump Pro, we prioritize innovation and sustainability in every project." },
      { title: "Reliability & Transparency", content: "We believe in honest communication, fair pricing, and delivering on our promises. Our team works closely with clients, ensuring full transparency from project initiation to completion, with no hidden surprises—just high-quality results." },
      { title: "Sustainable & Energy-Efficient Solutions", content: "Through Heat Pump Pro, we integrate renewable energy technologies into our construction projects, helping homeowners and businesses reduce their carbon footprint and energy costs. Our focus on sustainable building and heating aligns with modern energy efficiency goals and environmental responsibility." },
      { title: "Strong Client & Community Relationships", content: "We don't just build projects—we build long-term relationships with clients, contractors, and local communities. Our reputation is built on trust, reliability, and a commitment to exceeding expectations on every project we undertake." }
      ][index];
      
      const IconComponent = service.icon;
      
      return (
      <div key={index} className="p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">
          <IconComponent size={32} className="mb-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-yellowApp text-opacity-50">{item.content}</p>
      </div>
      );
    })}

  </div>
</section>

);

export default MiddleSection;
