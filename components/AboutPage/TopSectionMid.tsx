import React from "react";
import Image from "next/image";
import { imageArray } from "../../common/constants/constants";


const TopMidSection = () => (
    <section className="flex flex-col md:flex-row h-screen w-full font-montserrat">
        {/* Left Side */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-6 p-6">
            {imageArray.map((img, index) => (
                <div key={index} className="w-32 h-32 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={img.src}
                        alt={img.alt}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>

    </section>
);

export default TopMidSection;

