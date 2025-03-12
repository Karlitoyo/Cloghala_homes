import React from "react";

const MiddleBottomSection = () => (
  <section className="relative w-full bg-dark px-10 py-16 text-white">
    {/* Contact Button */}
    <div className="max-w-6xl mx-auto text-center mb-10">
      <button className="bg-yellowApp text-dark px-4 py-2 rounded-full font-bold">Contact Us</button>
    </div>

    {/* Grid Layout - 2/3 for stats, 1/3 for images */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-40">
      {/* Left Section - Stats (2/3 Width) */}
      <div className="col-span-1 md:col-span-2 flex flex-col gap-10">
        {/* First Div - Stats */}
        <div className="relative p-6 rounded-lg shadow-lg self-start w-full h-full flex items-center justify-center">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-yellowApp bg-opacity-15 rounded-lg z-0 md:rounded-br-midAboutCustom-bl md:rounded-tr-midAboutCustom-bl"></div>

          {/* Content Layer */}
          <div className="relative z-10 text-yellowApp text-center flex justify-evenly w-full">
            {/* First Row - Four text areas */}
            <div className="flex flex-wrap justify-evenly w-full">
              <div className="text-center my-4">
                <h3 className="text-xl font-bold lg:text-5xl md:text-3xl md:text-3xl">100%</h3>
                <p className="text-sm lg:text-3xl md:text-xl md:text-xl">Client Retention</p>
              </div>
              <div className="text-center my-4">
                <h3 className="text-xl font-bold lg:text-5xl md:text-3xl">50</h3>
                <p className="text-sm lg:text-3xl md:text-xl">Years of Service</p>
              </div>
              <div className="text-center my-4">
                <h3 className="text-xl font-bold lg:text-5xl md:text-3xl">30+</h3>
                <p className="text-sm lg:text-3xl md:text-xl">Team of Professionals</p>
              </div>
              <div className="text-center my-4">
                <h3 className="text-xl font-bold lg:text-5xl md:text-3xl">1500+</h3>
                <p className="text-sm lg:text-3xl md:text-xl">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Div - Stats */}
        <div className="relative p-6 rounded-lg shadow-lg self-start w-full h-full flex items-center justify-center">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-yellowApp bg-opacity-15 rounded-lg z-0 md:rounded-br-midAboutCustom-bl md:rounded-tr-midAboutCustom-bl"></div>

          {/* Content Layer */}
          <div className="relative z-10 text-yellowApp text-center flex justify-evenly w-full">
            {/* External Articles Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img src="/images/aboutPage/man-roof.jpg" alt="Article 1" className="w-full h-[200px] object-cover" />
                <a
                  href="https://www.example.com/article-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white text-center font-bold"
                >
                  Read Article 1
                </a>
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img src="/images/aboutPage/man-roof.jpg" alt="Article 2" className="w-full h-[200px] object-cover" />
                <a
                  href="https://www.example.com/article-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white text-center font-bold"
                >
                  Read Article 2
                </a>
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img src="/images/aboutPage/man-roof.jpg" alt="Article 3" className="w-full h-[200px] object-cover" />
                <a
                  href="https://www.example.com/article-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white text-center font-bold"
                >
                  Read Article 3
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Cascading Images (1/3 Width) */}
      <div className="flex flex-col gap-6 justify-self-end pr-10">
        <div className="relative h-[200px] w-[150px] sm:h-[250px] sm:w-[180px] md:h-[200px] md:w-[150px] overflow-hidden rounded-lg shadow-lg">
          <img src="/images/aboutPage/digger.jpg" alt="Project 1" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-[250px] w-[180px] sm:h-[300px] sm:w-[220px] md:h-[250px] md:w-[180px] overflow-hidden rounded-lg shadow-lg ml-6">
          <img src="/images/aboutPage/digger.jpg" alt="Project 2" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-[180px] w-[140px] sm:h-[220px] sm:w-[160px] md:h-[180px] md:w-[140px] overflow-hidden rounded-lg shadow-lg -ml-4">
          <img src="/images/aboutPage/digger.jpg" alt="Project 3" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-[220px] w-[160px] sm:h-[250px] sm:w-[180px] md:h-[220px] md:w-[160px] overflow-hidden rounded-lg shadow-lg ml-8">
          <img src="/images/aboutPage/digger.jpg" alt="Project 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default MiddleBottomSection;
