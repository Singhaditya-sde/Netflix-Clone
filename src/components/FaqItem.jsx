// FaqItem.jsx
import React from "react";
import { FiPlus } from "react-icons/fi";
import FaqList from "./Faqdata";

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center p-6 bg-[#303030] hover:bg-gray-700 cursor-pointer"
      >
        <span className="text-xl md:text-2xl font-medium text-white">{question}</span>
        <FiPlus
          className={`text-3xl md:text-4xl text-white transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="bg-[#303030] p-6 text-lg md:text-xl text-white font-normal whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
