import React, { useState } from "react";

const TopSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full py-40 bg-dark font-montserrat vh-100">
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden">
      {/* Contact Info */}
      <div className="md:w-1/3 bg-dark text-yellowApp p-6 flex flex-col justify-between">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-yellowApp">Contact us by phone or send a message and we will contact you!</p>
        <div className="mt-6">
          <p className="flex items-center"><span className="mr-2">📞</span> 083 168 0801</p>
          <p className="flex items-center"><span className="mr-2">✉️</span> Info@cloghalahomes.ie </p>
          <p className="flex items-center"><span className="mr-2">📍</span> Hebron Business Park, 39B Hebron Road, Leggetsrath West, Kilkenny R95 C43W
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="md:w-2/3 p-6 ">
        <h2 className="text-2xl font-bold text-yellowApp">Contact Us</h2>
        <p className="text-yellowApp">Any questions? Just write us a message!</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border p-2 rounded w-full" required />
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border p-2 rounded w-full" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-full" required />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="border p-2 rounded w-full" required />
          </div>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message.." className="border p-2 rounded w-full h-24" required></textarea>
          <button type="submit" className="bg-footerBrown text-yellowApp px-6 py-2 rounded-lg hover:bg-gray-700">Send Message</button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default TopSection;
