"use client"
import React from "react";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const ScrollButton = ({ targetId }: { targetId: string }) => {
    const handleClick = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    
    return (
      <button onClick={handleClick} className="btn group relative w-full flex justify-center py-2 px-4 text-sm font-medium text-[#FA8334] hover:underline">
        <span className="mr-2">
          <ArrowDownIcon />
        </span>
        <span>See Public Plans</span>
      </button>
    );
  };
  
  export default ScrollButton;
