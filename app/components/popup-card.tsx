import React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';

type PopupCardProps = {
  title: string;
  imageUrl: string;
  onClose: () => void;
};

const PopupCard = ({ title, imageUrl, onClose }: PopupCardProps) => {
  if (!title || !imageUrl) {
    // Show the placeholder card when no card is selected
    return (
      <div className="w-80 h-60 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
        <h1 className="text-xl">Select a card to see more details</h1>
      </div>
    );
  }

  return (
    <div className="relative w-80 h-60 rounded-lg overflow-hidden shadow-lg bg-gray-200 hover:bg-gray-300">
      <div className="absolute inset-0 z-0">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 z-10 bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white py-2 px-4">
        <button
          className="absolute top-2 right-2 rounded-full bg-white bg-opacity-50 p-1"
          onClick={onClose}
          aria-label="Close"
        >
          <Cross2Icon />
        </button>
        <h1 className="text-xl">{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nesciunt dicta magni
          voluptate labore veritatis suscipit rem iusto facilis quasi in voluptatem voluptates at
          aliquid illo optio, reiciendis placeat unde.
        </p>
      </div>
    </div>
  );
};

export default PopupCard;
