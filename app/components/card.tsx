import React, { useState } from 'react';
import Image from 'next/image';

type CardProps = {
  title: string;
  imageUrl: string;
  onClick: () => void;
};

const CardComponent = ({ title, imageUrl, onClick }: CardProps) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer bg-white"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <Image 
        src={imageUrl} 
        alt={title} 
        layout="fill"
        objectFit="cover" 
      />
      <div
        className={`absolute inset-x-0 bottom-0 flex justify-center transition-all duration-300 ease-in-out ${showTitle ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'}`}
      >
        <div className="py-1 px-2 m-2 bg-black bg-opacity-50 text-white text-sm font-bold rounded-lg">
          {title}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
