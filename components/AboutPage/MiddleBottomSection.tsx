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

        <div className="relative p-4 md:p-6 rounded-lg shadow-lg self-start w-full h-auto flex items-center justify-center min-h-[250px]">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-yellowApp bg-opacity-15 rounded-lg z-0 md:rounded-br-midAboutCustom-bl md:rounded-tr-midAboutCustom-bl"></div>

          {/* Content Layer */}
          <div className="relative z-10 text-yellowApp text-center w-full">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">External Resources</h3>

            <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-2 justify-items-center">
              {[
                {
                  href: "https://dnggalvin.ie/assessing-the-feasibility-of-renovating-old-properties-in-ireland/",
                  src: "/images/aboutPage/dng-logo.png",
                  alt: "Article 1",
                  title: "Assessing the Feasibility of Renovating Old Properties in Ireland",
                },
                {
                  href: "https://www.seai.ie/sites/default/files/publications/Promoting-retrofitting-among-homeowners-in-Ireland-through-a-behavioural-lens.pdf",
                  src: "/images/aboutPage/seai-logo.svg",
                  alt: "Article 2",
                  title: "Promoting retrofitting among homeowners in Ireland",
                },
                {
                  href: "https://www.riai.ie/whats-on/news/riai-publishes-old-house-new-home-a-free-online-guide",
                  src: "/images/aboutPage/riai-logo.svg",
                  alt: "Article 3",
                  title: "RIAI publishes Old House New Home - reimagine and conserve an older home",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg w-full max-w-[220px] aspect-[4/3] bg-white"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-60 text-white text-center font-semibold text-xs sm:text-sm"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MiddleBottomSection;
