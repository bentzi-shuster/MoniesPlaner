"use client"
import React from "react";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const ScrollButton = ({ targetId, contentText }: { targetId: string, contentText: string }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className="btn text-[#FA8334] hover:underline">
      <span className="inline mt-4 flex items-center justify-center">
        {contentText}
        <ArrowDownIcon />
      </span>
    </button>
  );
};

export default ScrollButton;
