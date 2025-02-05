import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "react";

export const Loading = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Mehedi Hasan />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          if (typeof onComplete === 'function') {
            onComplete();
          }
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-center">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-3/4 sm:w-1/2 md:w-[300px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  onComplete: PropTypes.func.isRequired,
};