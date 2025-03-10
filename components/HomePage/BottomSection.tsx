import React from "react";
import Link from "next/link";

const BottomSection = () => (
  <section className="relative flex flex-col items-center justify-center w-full py-40 text-white bg-dark">
    <div className="text-center text-yellowApp">
      <h2 className="text-3xl font-bold mb-4">Get in contact today!</h2>
      <Link href="/contact">
      <button className="bg-yellowApp text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
        Contact Us
      </button>
      </Link>
    </div>
  </section>
);

export default BottomSection;
