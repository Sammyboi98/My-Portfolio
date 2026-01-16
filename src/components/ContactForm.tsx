import { motion } from "motion/react";
import ContactBg from "../assets/images/Rectangle 4349.png";
import Logo from "../assets/images/Logo.png";
import LinkedinIcon from "../assets/images/linkedinIcon.png";
import BehanceIcon from "../assets/images/behanceIcon.jpg";
import WhatsAppIcon from "../assets/images/whatsappIcon.png";
import PhonIcon from "../assets/images/phoneIcon.png";
import EmailIcon from "../assets/images/emailIcon.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });
          form.current?.reset();
          // Clear success message after 5 seconds
          setTimeout(() => setStatus({ type: null, message: "" }), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again later.",
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="relative pt-12 bg-[#E6E6E9]">
      {/* ... existing background ... */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <img
          src={ContactBg}
          alt="Contact background"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10">
        {/* Card */}
        <motion.div
          className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 lg:translate-y-28 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-[#E6E6E9] border border-black rounded-2xl shadow-2xl overflow-hidden">
            {/* ... existing card content ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-10">
              {/* Left Section */}
              <div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Ready to start a project?
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  REACH OUT TO ME
                </h2>

                <div className="mt-6 space-y-4 text-gray-800">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
                      src={PhonIcon}
                      alt=""
                    />
                    <span className="text-sm sm:text-base font-medium">
                      +2347050388560
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      className="w-4 h-4 sm:w-5 sm:h-5 text-red-600"
                      src={EmailIcon}
                      alt=""
                    />
                    <span className="text-sm sm:text-base break-words font-medium">
                      Obadare.samson01@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-start">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-14">
                  Got Question?
                </h3>

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-4 w-full max-w-sm"
                >
                  <input
                    type="text"
                    name="user_name"
                    placeholder="NAME"
                    required
                    className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm sm:text-base placeholder-gray-500 text-gray-900 bg-transparent"
                  />

                  <input
                    type="email"
                    name="user_email"
                    placeholder="EMAIL"
                    required
                    className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm sm:text-base placeholder-gray-500 text-gray-900 bg-transparent"
                  />

                  <textarea
                    name="message"
                    placeholder="MESSAGE"
                    rows={3}
                    required
                    className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm sm:text-base placeholder-gray-500 text-gray-900 bg-transparent resize-none"
                  ></textarea>

                  {status.message && (
                    <div
                      className={`text-sm ${
                        status.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2 bg-[#07103b] text-white text-sm sm:text-base font-medium rounded-full hover:bg-[#2AF5FF] hover:text-black transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send a message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="w-full mt-24">
          <div className="w-full bg-[#050A30]">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 sm:gap-0 pt-10 pb-6 px-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 sm:w-28 sm:h-28 rounded flex items-center justify-center">
                  <img
                    src={Logo}
                    alt="Elshamzy's Logo"
                    className="w-10 sm:w-12 object-contain"
                  />
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <img
                    src={LinkedinIcon}
                    alt="LinkedIn"
                    className="w-full h-full"
                  />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition hover:scale-105"
                  aria-label="Behance"
                >
                  <img
                    src={BehanceIcon}
                    alt="Behance"
                    className="w-full h-full rounded"
                  />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <img
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    className="w-full h-full"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#E6E6E9]">
            <div className="max-w-6xl mx-auto text-center py-3 text-xs sm:text-sm text-[#050A30]">
              © {new Date().getFullYear()} El_Shamzy. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactForm;
