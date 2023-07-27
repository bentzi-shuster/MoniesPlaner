import React, { useState } from 'react';

type CardProps = {
  title: string;
  imageUrl: string;
  onClick: () => void; // Add onClick prop
};

const CardComponent = ({ title, imageUrl, onClick }: CardProps) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg bg-gray-200 hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      onClick={onClick} // Trigger onClick event when the card is clicked
    >
      {/* Image */}
      <img className="w-full h-full object-cover" src={imageUrl} alt={title} />

      {/* Title */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xl font-bold py-2 px-4 ${
          showTitle ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
      >
        {title}
      </div>
    </div>
  );
};

export default CardComponent;