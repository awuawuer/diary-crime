"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Define a type for the FAQ items
interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "How do I report?",
    answer:
      "You can report by contacting our support team or filling out the online form.",
  },
  {
    question: "What kind of report do we accept?",
    answer:
      "We accept various reports including technical issues, policy violations, and feedback.",
  },
  {
    question: "Can I send reports directly to the institution?",
    answer:
      "Yes, you can send reports directly through the institution's contact portal.",
  },
  {
    question: "Can I send emails directly to my home address?",
    answer:
      "No, emails are sent only to the registered addresses associated with your account.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <div className="absolute top-1 left-1 w-full h-full bg-green-400 rounded-md"></div>
          <div className="relative px-6 py-2 bg-gradient-to-r from-green-900 to-green-500 text-white font-semibold text-lg rounded-md">
            FAQs
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {faqs.map((faq: Faq, index: number) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-4 font-medium text-gray-900 hover:bg-gray-50 transition"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-gray-600"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="overflow-hidden">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
