import React, { useState } from "react";
import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service offering a wide variety of TV shows, movies, and more.",
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, smart TV, or laptop – all for one fixed monthly fee.",
  },
];

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          toggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
