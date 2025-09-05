import { useState } from "react";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Samson is an incredibly intuitive designer! Having worked with him over the last two years, I can confidently say his UX/UI expertise, design thinking, and user research skills are top-notch. His ability to craft user-centric solutions is truly impressive!",
      clientName: "Shadrach Igwe",
      clientRole: "Founder @ Certracker",
      clientImage: "👨‍💼",
      rating: 5,
    },
    {
      id: 2,
      text: "Working with samson elevated our entire product experience. His designs are not just beautiful—they’re strategic, user-focused, and aligned with our business goals. A true asset to the PayPetal journey.",
      clientName: "Bamidayo Samson",
      clientRole: "CEO @ Paypetal",
      clientImage: "👨‍💻",
      rating: 5,
    },
    {
      id: 3,
      text: "Samson's design expertise transformed our digital presence. His attention to detail and user-focused approach resulted in a significant increase in user engagement and conversion rates.",
      clientName: "Sarah Johnson",
      clientRole: "Product Manager @ TechFlow",
      clientImage: "👩‍💼",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-2">Testimonials</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Hear From My Clients
          </h1>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          <div className="flex items-center justify-center min-h-96">
            {/* Navigation Arrow - Left */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-600 hover:text-blue-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Current testimonial */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">
                      {testimonials[currentTestimonial].clientImage}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].clientName}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].clientRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* Next testimonial preview */}
              {testimonials.length > 1 && (
                <div className="bg-white/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-white/20">
                  <div className="flex mb-4">
                    {renderStars(
                      testimonials[
                        (currentTestimonial + 1) % testimonials.length
                      ].rating
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "
                    {testimonials[
                      (currentTestimonial + 1) % testimonials.length
                    ].text.substring(0, 100)}
                    ..."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">
                        {
                          testimonials[
                            (currentTestimonial + 1) % testimonials.length
                          ].clientImage
                        }
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">
                        {
                          testimonials[
                            (currentTestimonial + 1) % testimonials.length
                          ].clientName
                        }
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {
                          testimonials[
                            (currentTestimonial + 1) % testimonials.length
                          ].clientRole
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Arrow - Right */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-600 hover:text-blue-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
