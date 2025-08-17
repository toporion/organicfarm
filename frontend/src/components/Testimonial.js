import React, { useState, useEffect } from 'react';
import testimonial from '../assets/testimonial.jpg';

// Example client data
const reviews = [
  {
    text: "This service completely exceeded my expectations!",
    name: "John Doe",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: "Amazing experience — I’ll definitely recommend to others.",
    name: "Sarah Smith",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: "Top-notch support and great results!",
    name: "David Lee",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    text: "Professional, reliable, and very easy to work with.",
    name: "Emma Johnson",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[700px] overflow-hidden flex items-center  justify-center">
      {/* Background image */}
      <img
        src={testimonial}
        alt="testimonial"
        className="w-full h-full "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-30" />

      {/* Review content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-green-600 bg-opacity-90 text-white p-8 rounded-2xl max-w-xl text-center shadow-lg transition-all duration-500">
          {/* Client image */}
          <img
            src={reviews[current].image}
            alt={reviews[current].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
          />
          {/* Review text */}
          <p className="text-lg italic mb-4">“{reviews[current].text}”</p>
          {/* Client name */}
          <h3 className="text-xl font-semibold">{reviews[current].name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
