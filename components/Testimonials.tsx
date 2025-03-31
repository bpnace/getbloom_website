import React, { useState } from 'react';

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "Bloom ist die ultimative Lösung für unser Gesundheits- und Abwesenheitsmanagement. Die Benutzerfreundlichkeit macht es sowohl für unsere Mitarbeiter als auch für unser HR-Team sehr einfach zu nutzen.",
    author: "Nikolas Löbel",
    position: "CEO",
    company: "Cargo.one",
    image: "/testimonial-image.jpg",
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bloom – eine innovative Lösung für anspruchsvolle Unternehmen
          </h2>
        </div>

        <div className="bg-indigo-600 rounded-xl p-8 text-white max-w-4xl mx-auto mb-12">
          <div className="mb-4 text-lg">
            "{testimonials[currentSlide].quote}"
          </div>
          <div className="flex items-center justify-center mt-8">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-indigo-300 overflow-hidden mr-4">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <rect width="48" height="48" fill="#c7d2fe" />
                <text x="24" y="28" fontSize="16" textAnchor="middle" fill="#4338ca">NL</text>
              </svg>
            </div>
            <div>
              <div className="font-bold">{testimonials[currentSlide].author}</div>
              <div className="text-indigo-200">
                {testimonials[currentSlide].position}, {testimonials[currentSlide].company}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-indigo-600 hover:text-indigo-600"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-indigo-600 hover:text-indigo-600"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 