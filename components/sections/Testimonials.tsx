'use client';

import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Varshith Merugu",
    role: "Founder",
    company: "WassupMediaCo",
    content: "From design to launch, Softloftix made the entire process seamless. Our website now truly reflects our brand's identity.",
    rating: 5,
    initials: "VM"
  },
  {
    name: "Suhair Rahman",
    role: "Founder",
    company: "SpainAcademy",
    content: "Softloftix transformed our website into a sleek, high-performance platform. Our clients love the new experience.",
    rating: 5,
    initials: "SR"
  },
  {
    name: "Francesco",
    role: "Founder & CEO",
    company: "Tremik",
    content: "The site Softloftix built for us is a game-changer. Stunning visuals and effortless performance—exactly what we needed.",
    rating: 4,
    initials: "FR"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "TechVentures",
    content: "The team delivered beyond expectations. Our platform handles 10x the traffic with better performance than before.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead",
    company: "InnovateLabs",
    content: "Working with Softloftix was a breeze. They understood our vision and executed it flawlessly.",
    rating: 5,
    initials: "ER"
  },
  {
    name: "James Wilson",
    role: "Director",
    company: "GlobalTech",
    content: "Professional, responsive, and incredibly talented. Our app launch was a massive success thanks to their work.",
    rating: 5,
    initials: "JW"
  }
];

const testimonials2: Testimonial[] = [
  {
    name: "Khushi",
    role: "Founder",
    company: "Khushiva",
    content: "They revamped our e-commerce store, sales have never been better. The site is faster and more user-friendly.",
    rating: 5,
    initials: "KH"
  },
  {
    name: "Satvik",
    role: "Founder",
    company: "UpSync Media",
    content: "The team's work is of the highest quality when it comes to building websites. They know exactly what works in your industry and create your site accordingly.",
    rating: 5,
    initials: "SA"
  },
  {
    name: "Alicia Pohl",
    role: "Founder",
    company: "AECreatives",
    content: "The team helped us kickstart our creative agency in Germany with ease, love them!",
    rating: 5,
    initials: "AP"
  },
  {
    name: "Ruby Liza",
    role: "CEO",
    company: "CommerceFlow",
    content: "Our e-commerce platform is smoother and faster than ever. Their expertise made a real difference in our conversion rates.",
    rating: 5,
    initials: "RL"
  },
  {
    name: "David Park",
    role: "Founder",
    company: "StartupHub",
    content: "From concept to deployment, they handled everything. The quality of work exceeded our expectations.",
    rating: 5,
    initials: "DP"
  },
  {
    name: "Sophie Turner",
    role: "Marketing Head",
    company: "BrandFirst",
    content: "The website they built has significantly improved our lead generation. Highly recommend their services.",
    rating: 5,
    initials: "ST"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-white fill-white' : 'text-white/20 fill-white/20'}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
        </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[380px] p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 hover:bg-black/60">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/80">
            {testimonial.initials}
          </div>
          <span className="font-medium text-white font-geist">{testimonial.name}</span>
        </div>
        <StarRating rating={testimonial.rating} />
            </div>
      
      {/* Content */}
      <p className="text-white/70 text-sm leading-relaxed mb-4 font-geist min-h-[60px]">
        {testimonial.content}
      </p>
      
      {/* Footer */}
      <p className="text-white/40 text-sm font-geist">
        {testimonial.role}, {testimonial.company}
      </p>
              </div>
  );
};

const Testimonials = () => {
  // Duplicate testimonials for seamless infinite scroll
  const row1Items = [...testimonials, ...testimonials, ...testimonials];
  const row2Items = [...testimonials2, ...testimonials2, ...testimonials2];

  return (
    <section className="py-24 relative overflow-hidden" id="reviews">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold font-geist tracking-tight text-white animate-on-scroll">
          Testimonials
        </h2>
            </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Moving Left */}
        <div className="mb-6 overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-left">
            {row1Items.map((testimonial, index) => (
              <TestimonialCard key={`row1-${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </div>
            </div>

        {/* Row 2 - Moving Right */}
        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-right">
            {row2Items.map((testimonial, index) => (
              <TestimonialCard key={`row2-${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
