import React from "react";

const TopSection = () => (
<section className="w-full bg-dark px-10 py-16 text-white">
  {/* Project One */}
  <div className="mb-16 mt-20">
    <h2 className="text-center text-yellowApp text-2xl font-bold mb-8">Project One</h2>
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 4" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-2">
        <img src="/images/aboutPage/digger.jpg" alt="Image 5" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 6" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 7" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  </div>

  {/* Project Two */}
  <div>
    <h2 className="text-center text-yellowApp text-2xl font-bold mb-8">Project Two</h2>
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 8" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 9" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 10" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-2">
        <img src="/images/aboutPage/digger.jpg" alt="Image 11" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 12" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 13" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src="/images/aboutPage/digger.jpg" alt="Image 14" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  </div>
</section>

);

export default TopSection;