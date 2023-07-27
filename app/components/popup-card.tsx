import React from 'react';

type PopupCardProps = {
  title: string;
  imageUrl: string;
};

const PopupCard = ({ title, imageUrl }: PopupCardProps) => {
  return (
    <div className="relative w-80 h-60 rounded-lg overflow-hidden shadow-lg bg-gray-200 hover:bg-gray-300">
      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white py-2 px-4">
        {title && imageUrl ? (
          <>
            <h1 className="text-xl">{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nesciunt dicta
              magni voluptate labore veritatis suscipit rem iusto facilis quasi in voluptatem
              voluptates at aliquid illo optio, reiciendis placeat unde.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-xl">{title}</h1>
            <p>Select a dream from the left to see more details</p>
          </>
        )}
      </div>
      <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
    </div>
  );
};

export default PopupCard;
