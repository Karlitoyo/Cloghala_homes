import React from "react";
import Link from "next/link";

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
          <div className="relative z-10 text-yellowApp text-center flex justify-evenly w-full">
            {/* External Articles Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-[250px]">
                <img src="/images/aboutPage/harvard.svg" alt="Article 1" className="w-full h-full object-cover" />
                <a
                  href="https://www.jchs.harvard.edu/research-areas/remodeling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white text-center font-bold"
                >
                  Harvard Center for Housing Studies
                </a>
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-lg h-[250px]">
                <img src="/images/aboutPage/bsa.png" alt="Article 2" className="w-full h-full object-cover" />
                <a
                  href="https://journals.sagepub.com/doi/10.1177/0038038520954689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white text-center font-bold"
                >
                  Understanding Home Renovation
                </a>
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-lg h-[250px]">
                <img src="/images/aboutPage/scsi.png" alt="Article 3" className="w-full h-full object-cover" />
                <a
                  href="https://scsi.ie/wp-content/uploads/2023/03/SCSI_RealCostofRenovate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white text-center font-bold"
                >
                  Cost of Renovation Report
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
