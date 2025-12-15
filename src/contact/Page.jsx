import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import React, { useState } from "react";


import AboutImg from "../assets/about-img-landing-ug-xim.jpg";



// Email address for Formspree 
const RECIPIENT_EMAIL = "ucse23032@stu.xim.edu.in";
// Formspree Endpoint for secure submission handling
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzrawgy";
// -------------------------------

const Page = () => {
  // State for form data inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'idle'


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("idle");

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setSubmissionStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmissionStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Formspree submission failed:", await response.json());
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Network error during submission:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };


  const inputStyle = "rounded-2xl bg-neutral-900 px-5 py-3 font-inter text-xs md:text-base text-white tracking-wide font-extralight border border-neutral-800 outline-none focus:border-blue-500";


  return (
    <div className="min-h-screen h-full text-2xl w-full py-10 relative">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8 pb-6">

        {/* Main Headline */}
        <div className="py-4 pb-20 md:py-20">
          <h1 className="text-7xl md:text-8xl font-bebas-neue font-bold tracking-wide">
            The{" "}
            <span className="bg-blue-500 text-white px-2">community</span>{" "}
            you need, for the{" "}
            <span className="text-neutral-500">potential</span> you have.
          </h1>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="h-full w-full bg-neutral-950 text-neutral-400 rounded-4xl flex flex-col gap-5 py-10 px-6"
          >
            <p className="text-xl font-bebas-neue font-bold text-center pb-4">
              Send us a message
            </p>

            {/* Status Messages */}
            {submissionStatus === "success" && (
              <p className="text-green-400 text-center font-inter text-sm md:text-base">
                Query submitted successfully! The message has been sent to {RECIPIENT_EMAIL}.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-red-400 text-center font-inter text-sm md:text-base">
                Submission failed. Please try again or ensure all fields are complete.
              </p>
            )}

            {/* Form Inputs */}
            <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} className={inputStyle} required />

            <div className="grid grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className={inputStyle} required />
              <input type="tel" name="phone" placeholder="Phone (Optional)" value={formData.phone} onChange={handleChange} className={inputStyle} />
            </div>

            <input type="text" name="subject" placeholder="Enter Subject *" value={formData.subject} onChange={handleChange} className={inputStyle} required />

            <textarea rows="6" name="message" placeholder="Enter your message *" value={formData.message} onChange={handleChange} className={`resize-y ${inputStyle}`} required />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-neutral-200 text-xs md:text-base font-inter font-medium text-neutral-950 py-3 rounded-4xl 
              disabled:bg-neutral-600 disabled:text-neutral-400 transition-colors"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {/* Direct Email Info */}
            <div className="font-inter bg-neutral-900 text-center py-8 mt-2 md:mt-6 space-y-2 rounded-2xl">
              <p className="text-xs md:text-sm uppercase tracking-widest text-neutral-400">
                Direct Email
              </p>
              <p className="text-neutral-50">
                {RECIPIENT_EMAIL}
              </p>
            </div>


            <div className="flex gap-4">
              <a href="https://www.instagram.com/xim_acm/" target="_blank" rel="noopener noreferrer" className="h-full w-full bg-neutral-900 flex justify-center items-center py-10 rounded-2xl cursor-pointer hover:bg-neutral-800 transition-colors">
                <Instagram size={30} />
              </a>
              <a href="https://www.linkedin.com/company/xim-acm/" target="_blank" rel="noopener noreferrer" className="h-full w-full bg-neutral-900 flex justify-center items-center py-10 rounded-2xl cursor-pointer hover:bg-neutral-800 transition-colors">
                <Linkedin size={30} />
              </a>
              <a href="https://www.youtube.com/@XIMUniversityOfficial" target="_blank" rel="noopener noreferrer" className="h-full w-full bg-neutral-900 flex justify-center items-center py-10 rounded-2xl cursor-pointer hover:bg-neutral-800 transition-colors">
                <Youtube size={30} />
              </a>
            </div>
          </form>

          {/* Image/Community Info Box */}
          <div className="w-full h-full">
            <div className="h-full min-h-[520px] rounded-4xl overflow-hidden relative group">
              <img
                src={AboutImg}
                alt="ACM XIM Student Chapter Community"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Text Content over Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white space-y-3">
                <h2 className="text-3xl md:text-4xl font-bebas-neue tracking-wide">
                  Build. Learn. Lead.
                </h2>
                <p className="text-sm md:text-base font-inter text-neutral-200 max-w-md">
                  Join the ACM-XIM Student Chapter to collaborate, innovate,
                  and grow with a vibrant community of developers, designers,
                  and tech enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="w-full py-16">
          <div className="relative pb-[36.25%] h-0 overflow-hidden rounded-2xl">
            <iframe
              // Google Maps embed for XIM University New Campus, Harirajpur
              src="https://maps.google.com/maps?q=XIM+University+Bhubaneswar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XIM University Location"
            ></iframe>
          </div>
        </div>


        <FooterNavigation />
      </div>
    </div>
  );
};


function FooterNavigation() {
  return (
    <div className="absolute w-full bottom-0 left-0 py-5 px-4 md:px-8 text-neutral-50 bg-neutral-950 border-t border-neutral-700 z-[9999] text-base md:text-lg">
      <div className="max-w-[100rem] mx-auto flex justify-between items-center relative top-1">


        <a
          href="/notice"
          className="font-inter uppercase flex items-center group cursor-pointer"
        >
          <ChevronLeft
            size={18}
            className="group-hover:text-neutral-300 relative -left-0.5 group-hover:-left-2 transition-all ease-in-out duration-300"
          />
          <p>Notice</p>
        </a>

        <a
          href="/contact"
          className="font-inter uppercase text-lg flex items-center group cursor-pointer"
        >
          <p className="hover:tracking-widest hover:text-neutral-300 transition-all ease-in-out duration-200">
            Contact
          </p>
        </a>
        <a
          href="/"
          className="font-inter uppercase flex items-center group cursor-pointer"
        >
          <p>Home</p>
          <ChevronRight
            size={19}
            className="group-hover:text-neutral-300 relative left-0.5 group-hover:left-2 transition-all ease-in-out duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Page;