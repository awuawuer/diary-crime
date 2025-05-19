// import React from "react";

// interface Benefit {
//   title: string;
//   description: string[];
//   image: string;
// }

// const benefits: Benefit[] = [
//   {
//     title: "Enhanced Security & Confidentiality",
//     description: [
//       "Encryption & authentication protect sensitive crime data.",
//       "Role-based access ensures only authorized personnel can view/edit reports.",
//     ],
//     image: "/images/security.png",
//   },
//   {
//     title: "Legal & Compliance Support",
//     description: [
//       "Ensures proper documentation for court proceedings.",
//       "Maintains tamper-proof digital evidence.",
//     ],
//     image: "/images/legal.png",
//   },
//   {
//     title: "User-Friendly Interface",
//     description: [
//       "A well-designed User Interface enhances usability by providing an intuitive and visually appealing experience.",
//     ],
//     image: "/images/interface.png",
//   },
//   {
//     title: "Public Engagement & Transparency",
//     description: ["Citizens can track case status", "and stay informed."],
//     image: "/images/public.png",
//   },
// ];

// const BenefitsSection: React.FC = () => {
//   return (
//     <section className="bg-[#F3F7FF] py-16 px-4">
//       <div className="text-center mb-12">
//         <div className="inline-block relative">
//           <div className="bg-gradient-to-r from-green-800 to-green-400 text-white py-3 px-10 rounded-lg shadow-lg">
//             Benefits
//           </div>
//           <div className="absolute top-2 left-2 bg-green-500 w-full h-full rounded-lg z-[-1]"></div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {benefits.map((benefit, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg p-6 shadow-md text-center"
//           >
//             <img
//               src={benefit.image}
//               alt="icon"
//               className="mx-auto mb-4 w-20 h-20 object-contain"
//             />
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">
//               {benefit.title}
//             </h3>
//             <ul className="text-gray-600 text-sm list-disc list-inside">
//               {benefit.description.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;

// BenefitsSection.jsx
// This component displays a section of benefits with images and descriptions.
import React from "react";
import Image from "next/image";

export default function Benefits() {
  const benefits = [
    {
      title: "Enhanced Security & Confidentiality",
      points: [
        "Encryption & authentication protect sensitive crime data.",
        "Role-based access ensures only authorized personnel can view/edit reports.",
      ],
      image: "/images/card1.png",
    },
    {
      title: "Legal & Compliance Support",
      points: [
        "Ensures proper documentation for court proceedings.",
        "Maintains tamper-proof digital evidence",
      ],
      image: "/images/card2.png",
    },
    {
      title: "User-Friendly Interface",
      points: [
        "A well-designed User Interface enhances usability by providing an intuitive and visually appealing experience.",
      ],
      image: "/images/card3.png",
    },
    {
      title: "Public Engagement & Transparency",
      points: ["Citizens can track case status", "and stay informed."],
      image: "/images/card4.png",
    },
  ];

  return (
    <section className="bg-[#f1f6ff] py-12 px-4">
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <div className="absolute top-1 left-1 w-full h-full bg-green-400 rounded-md"></div>
          <div className="relative px-6 py-2 bg-gradient-to-r from-green-900 to-green-500 text-white font-semibold text-lg rounded-md">
            Benefits
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="mb-4 w-20 h-20 relative">
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <ul className="text-gray-600 text-sm space-y-1">
              {benefit.points.map((point, i) => (
                <li key={i} className="list-disc list-inside">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
