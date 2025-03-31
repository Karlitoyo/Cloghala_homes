import React from "react";
import Link from "next/link";
import Image from "next/image";

const MiddleBottomSection = () => (
  <section className="relative w-full bg-dark px-10 py-16 text-white">
    {/* Contact Button */}
    <div className="max-w-6xl mx-auto text-center mb-10">
      <Link href="/contact">
        <button className="bg-yellowApp text-dark px-4 py-2 rounded-full font-bold">Contact Us</button>
      </Link>
    </div>

    {/* Grid Layout - Stats Section (2/3 Width) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-20">
      {/* Left Section - Stats (2/3 Width) */}
      <div className="col-span-1 md:col-span-2 flex flex-col gap-10">
        {/* First Div - Stats */}
        <div className="relative p-6 rounded-lg shadow-lg self-start w-full h-auto flex items-center justify-center min-h-[250px]">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-yellowApp bg-opacity-15 rounded-lg z-0 md:rounded-br-midAboutCustom-bl md:rounded-tr-midAboutCustom-bl"></div>

          {/* Content Layer */}
          <div className="relative z-10 text-yellowApp text-center flex justify-evenly w-full">
        {/* First Row - Four text areas */}
        <div className="flex flex-wrap justify-evenly w-full">
          <div className="text-center my-4">
            <h3 className="text-xl font-bold lg:text-5xl md:text-3xl">100%</h3>
            <p className="text-sm lg:text-3xl md:text-xl">Client Retention</p>
          </div>
          <div className="text-center my-4">
            <h3 className="text-xl font-bold lg:text-5xl md:text-3xl">30</h3>
            <p className="text-sm lg:text-3xl md:text-xl">Years of Service</p>
          </div>
          <div className="text-center my-4">
            <h3 className="text-xl font-bold lg:text-5xl md:text-3xl">30+</h3>
            <p className="text-sm lg:text-3xl md:text-xl">Team of Professionals</p>
          </div>
        </div>
          </div>
        </div>

        {/* Second Div - Stats */}
        <div className="relative p-6 rounded-lg shadow-lg self-start w-full h-auto flex items-center justify-center min-h-[250px]">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-yellowApp bg-opacity-15 rounded-lg z-0 md:rounded-br-midAboutCustom-bl md:rounded-tr-midAboutCustom-bl"></div>

        {/* Content Layer */}
        <div className="relative z-10 text-yellowApp text-center w-full">
        {/* Title for the section */}
        <h3 className="text-xl font-bold mb-6">External Resources</h3>
        
        {/* External Articles Section */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg h-[200px] w-[220px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <Image 
            src="/images/aboutPage/dng-logo.png" 
            alt="Article 1" 
            className="w-full h-full" 
            width={220} 
            height={200} 
            style={{ objectFit: 'contain' }}
            priority
          />
          <a
            href="https://dnggalvin.ie/assessing-the-feasibility-of-renovating-old-properties-in-ireland/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-60 text-white text-center font-bold text-xs sm:text-sm"
          >
            Assessing the Feasibility of Renovating Old Properties in Ireland
          </a>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg h-[200px] w-[220px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <Image 
            src="/images/aboutPage/seai-logo.svg" 
            alt="Article 2" 
            className="w-full h-32" 
            width={220} 
            height={200} 
            style={{ objectFit: 'contain' }}
            priority
          />
          <a
            href="https://www.seai.ie/sites/default/files/publications/Promoting-retrofitting-among-homeowners-in-Ireland-through-a-behavioural-lens.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-60 text-white text-center font-bold text-xs sm:text-sm"
          >
            Promoting retrofitting among homeowners in Ireland
          </a>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg h-[200px] w-[220px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl sm:col-span-2 lg:col-span-1">
          <Image 
            src="/images/aboutPage/riai-logo.svg" 
            alt="Article 3" 
            className="w-full h-32" 
            width={220} 
            height={200} 
            style={{ objectFit: 'contain' }}
            priority
          />
          <a
            href="https://www.riai.ie/whats-on/news/riai-publishes-old-house-new-home-a-free-online-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-60 text-white text-center font-bold text-xs sm:text-sm"
          >
            RIAI publishes Old House New Home - reimagine and conserve an older home
          </a>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </section>
);

export default MiddleBottomSection;
