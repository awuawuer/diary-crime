"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Dooshim Tion",
    role: "Cyber Threat Analyst",
    review:
      "The Digital Crime Diary Solution has completely transformed how we track and analyze criminal activities. The user-friendly interface and real-time data access help us make faster, more informed decisions.",
    rating: 3,
    image: "/images/ident1.png",
  },
  {
    name: "Onjeh Ada",
    role: "Licensed Investigator",
    review:
      "As a private investigator, I rely on accurate and organized records. This solution not only streamlines my case management but also provides insightful analytics that help me spot patterns quickly.",
    rating: 4,
    image: "/images/ident2.png",
  },
  {
    name: "Terwase Ejeh",
    role: "Cyber Crime Unit",
    review:
      "Keeping track of digital crimes is complex, but this tool simplifies everything. With automated reporting and secure data storage, I can focus on analyzing threats rather than managing paperwork.",
    rating: 4,
    image: "/images/ident3.png",
  },
  {
    name: "Ene Adakole",
    role: "Community Advocate",
    review:
      "The Digital Crime Diary Solution gives me peace of mind by providing a secure and efficient way to report incidents. It bridges the gap between the community and law enforcement, ensuring that no crime goes unnoticed.",
    rating: 4,
    image: "/images/ident4.png",
  },
];

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex mb-1">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "text-green-600" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <div className="mb-10 transform translate-x-[1%]">
        <div className="inline-block relative text-white font-bold text-sm px-5 py-2 rounded bg-gradient-to-r from-green-950 to-green-400">
          Testimonials
          <span className="absolute top-[5px] left-[5px] w-full h-full bg-green-400 -z-10 rounded transform -skew-x-[10deg]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-5 rounded-xl flex items-center text-left"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full mr-4"
              width={60}
              height={60}
            />
            <div className="flex-1">
              <StarRating rating={testimonial.rating} />
              <h3 className="font-semibold">{testimonial.role}</h3>
              <blockquote className="text-sm text-gray-700">
                {testimonial.review}
              </blockquote>
              <span className="font-bold block mt-2">-{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
