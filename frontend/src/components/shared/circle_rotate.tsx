import React from "react";

function CircularTextElement({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Inner Circle */}
      <div className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
        {icon}
      </div>

      {/* Outer Text Circle */}
      <div className="absolute w-40 h-40 rounded-full">
        <p className="circular-text text-center">{text}</p>
      </div>
    </div>
  );
}

export default CircularTextElement;
