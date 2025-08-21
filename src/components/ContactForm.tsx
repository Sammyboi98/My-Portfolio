import { Mail, Phone, Linkedin, Twitter, Slack } from "lucide-react";
import ContactBg from "./icons/contactBg";

const ContactForm = () => {
  return (
    <section className="w-full bg-[#E6E6E9] text-white py-12 px-6 relative overflow-hidden">
      {/* decorative background curve - hidden on small screens */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
        <ContactBg className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative z-10 lg:mr-12 transform lg:translate-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 lg:p-10">
          {/* Left Section */}
          <div>
            <p className="text-gray-600">Ready to start a project?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
              REACH OUT TO ME
            </h2>

            <div className="mt-6 space-y-4 text-gray-800">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span className="text-sm sm:text-base">+2347050388560</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-sm sm:text-base">
                  Obadare.samson01@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
              Got Question?
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm sm:text-base placeholder-gray-500 text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm sm:text-base placeholder-gray-500 text-gray-900"
                />
              </div>
              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={3}
                  className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm sm:text-base placeholder-gray-500 text-gray-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 px-6 py-2  text-white text-sm font-medium rounded-full hover:bg-[#2AF5FF] hover:text-black transition"
              >
                Send a message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className=" py-6 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300">
          {/* Logo + Branding */}
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <div className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold rounded">
              ES
            </div>
            <span className="text-gray-400">Design & Development</span>
          </div>

        {/* Socials */}
        <div className="flex gap-4 text-white">
            <a
              href="#"
              className="hover:text-[#2AF5FF] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#2AF5FF] transition"
              aria-label="Behance"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#2AF5FF] transition"
              aria-label="WhatsApp"
            >
              <Slack className="w-5 h-5" />
            </a>
          </div>
        </div> 

        <div className=" text-center py-3 text-xs text-gray-400 border-t border-gray-700">
          © 2025 EL Obanory. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

// import React, { useState } from "react";
// import { Phone, Mail, Linkedin, MessageCircle } from "lucide-react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target as HTMLInputElement & HTMLTextAreaElement;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       console.log("Form submitted:", formData);
//       setIsSubmitting(false);
//       // Reset form
//       setFormData({ name: "", email: "", message: "" });
//       alert("Message sent successfully!");
//     }, 1000);
//   };

//   const socialLinks = [
//     {
//       icon: (
//         <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-blue-900 font-bold text-lg">
//           S
//         </div>
//       ),
//       href: "#",
//       label: "Portfolio",
//     },
//     {
//       icon: <Linkedin className="w-8 h-8" />,
//       href: "#",
//       label: "LinkedIn",
//       bgColor: "bg-blue-600",
//     },
//     {
//       icon: (
//         <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
//           Be
//         </div>
//       ),
//       href: "#",
//       label: "Behance",
//     },
//     {
//       icon: <MessageCircle className="w-8 h-8" />,
//       href: "#",
//       label: "WhatsApp",
//       bgColor: "bg-green-500",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Background Design Elements */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900 to-indigo-800 transform skew-x-12 translate-x-1/4"></div>
//       <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-r from-blue-900 to-indigo-800 transform -skew-x-12 -translate-x-1/4"></div>

//       <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
//         {/* Contact Information */}
//         <div className="text-left space-y-6 md:space-y-8 px-4 md:px-0">
//           <div>
//             <p className="text-gray-600 mb-2 text-sm md:text-base">
//               Ready to start a project?
//             </p>
//             <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8">
//               REACH OUT TO ME
//             </h1>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
//                 <Phone className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-gray-700 text-sm md:text-lg">
//                 +234705038650
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
//                 <Mail className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-gray-700 text-sm md:text-lg break-all">
//                 Obaelare.samson01@gmail.com
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/20">
//           <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6">
//             Got Question?
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-600 mb-2"
//               >
//                 NAME
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 transition-colors duration-300"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-600 mb-2"
//               >
//                 EMAIL
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 transition-colors duration-300"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-600 mb-2"
//               >
//                 MESSAGE
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//                 rows={4}
//                 className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 resize-none transition-colors duration-300"
//                 placeholder="Tell me about your project"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 text-white font-semibold py-4 px-6 rounded-full hover:from-blue-800 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? "Sending..." : "Send a message"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-indigo-800 p-4 sm:p-6">
//         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
//           <div className="flex items-center space-x-4">
//             <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
//               ES
//             </div>
//           </div>

//           <div className="flex space-x-3">
//             {socialLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 className={`p-2 rounded-lg hover:scale-110 transform transition-all duration-300 hover:shadow-lg ${
//                   link.bgColor || "bg-white"
//                 }`}
//                 aria-label={link.label}
//               >
//                 {link.icon}
//               </a>
//             ))}
//           </div>

//           <p className="text-white/80 text-sm hidden sm:block">
//             © 2025 O. Sammy. All right reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
