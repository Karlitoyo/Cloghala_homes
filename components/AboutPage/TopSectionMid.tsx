import React from "react";
import Image from "next/image";
import { imageArray } from "../../common/constants/constants";


const TopMidSection = () => (
    <section className="relative w-full bg-dark px-10 py-16 font-montserrat">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* 🔼 Top Image Grid - Spanning 3 Columns */}
            <div className="md:col-span-3 grid grid-cols-3 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-full aspect-square relative">
                        <Image
                            src={imageArray[i % imageArray.length].src}
                            alt={imageArray[i % imageArray.length].alt || `Work ${i + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* 🟨 Text Block on the Left */}
            <div className="md:col-span-2 bg-yellow-200 text-black p-6 rounded-lg shadow-lg flex flex-col justify-center">
                <h2 className="text-3xl font-bold">What sets us apart?</h2>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>End-to-end solution specialists</li>
                    <li>Worked on over 1500 projects</li>
                    <li>Client-centric approach</li>
                    <li>Open and transparent processes</li>
                    <li>50 years of business</li>
                </ul>
            </div>

            {/* 📸 Right-Side Image Grid - Matches Top Row */}
            <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-full aspect-square relative">
                        <Image
                            src={imageArray[i % imageArray.length].src}
                            alt={imageArray[i % imageArray.length].alt || `Work ${i + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>

        </div>
    </section>





);

export default TopMidSection;

