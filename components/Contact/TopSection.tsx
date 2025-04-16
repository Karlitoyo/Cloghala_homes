'use client';

import React, { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const TopSection = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    if (executeRecaptcha) {
      setRecaptchaLoaded(true);
    }
  }, [executeRecaptcha]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert('Security check not ready. Please refresh the page and try again.');
      return;
    }

    try {
      setSubmitting(true);
      const token = await executeRecaptcha('submit');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          token,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const err = await response.json();
        alert(err?.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // If the form is submitted, show confirmation
  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center text-yellowApp bg-dark">
        <div className="bg-dark p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p>Your message has been sent successfully.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex flex-col items-center justify-center w-full py-40 bg-dark font-montserrat min-h-screen">
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden">
        {/* Contact Info */}
        <div className="md:w-1/3 bg-dark text-yellowApp p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-yellowApp">
            Contact us by phone or send a message and we will get back to you!
          </p>
          <div className="mt-6">
            <p className="flex items-center"><span className="mr-2">📞</span> 083 168 0801</p>
            <p className="flex items-center"><span className="mr-2">✉️</span> info@cloghalahomes.ie</p>
            <p className="flex items-center">
              <span className="mr-2">📍</span> Hebron Business Park, 39B Hebron Road, Kilkenny R95 C43W
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 p-6">
          <h2 className="text-2xl font-bold text-yellowApp">Contact Us</h2>
          <p className="text-yellowApp">Any questions? Just write us a message!</p>

          {!recaptchaLoaded && (
            <div className="text-yellow-500 mt-2 mb-4">
              Loading security verification...
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border p-2 rounded w-full"
                required
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-2 rounded w-full"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message.."
              className="border p-2 rounded w-full h-24"
              required
            ></textarea>

            <div className="text-xs text-gray-400">
              This site is protected by reCAPTCHA v3. By submitting, you agree to Google's Privacy Policy and Terms of Service.
            </div>

            <button 
              type="submit" 
              className="bg-footerBrown text-yellowApp px-6 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200" 
              disabled={submitting || !recaptchaLoaded}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
