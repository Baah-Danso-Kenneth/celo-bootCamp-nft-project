import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";

const CircleWithText = ({
  text,
  image,
  size = "medium", // Default size
}: {
  text: string;
  image: StaticImageData;
  size?: "small" | "medium" | "large";
}) => {
  // Dynamically determine width and height based on the size prop
  const imageSizeClasses = clsx({
    "w-16 h-16": size === "small",
    "w-24 h-24": size === "medium", // Default
    "w-100 h-500": size === "large",
  });

  return (
    <div className="relative w-32 h-32 rounded-full border-2 border-gray-800 flex items-center justify-center overflow-hidden">
      {/* SVG for bent text */}
      <div className="absolute w-full h-full">
        <svg
          viewBox="0 0 100 100"
          className="absolute top-0 left-0 w-full h-full rotate-[-90deg]"
        >
          <path
            id="circlePath"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
          <text className="fill-gray-800 uppercase text-[10px] md:text-[10px] font-bold ">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Image in the center */}
      <Image
        src={image}
        alt={text}
        className={clsx("rounded-full object-cover z-20", imageSizeClasses)}
      />
    </div>
  );
};

export default CircleWithText;
