"use client"
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import PageLayout from './components/page-layout';
import CardComponent from './components/card';
import PopupCard from './components/popup-card';

type CardInfo = {
  title: string;
  imageUrl: string;
};

// Placeholder data
const cards: CardInfo[] = [
  {
    title: "Bad Bear",
    imageUrl: "https://cdn.discordapp.com/attachments/1069455158922190948/1121622537655308438/47920001.JPG"
  },
  {
    title: "The Mandalorian as a 1990s anime aesthetic",
    imageUrl: "https://cdn.discordapp.com/attachments/1093012473231196190/1095108770276851804/Carrlos_the_Mandalorian_as_a_1990s_anime_aesthetic_ddd2bdba-45bd-4256-b93b-dce46aae4d2d.png"
  },
  {
    title: "Nature",
    imageUrl: "https://picsum.photos/seed/3/300"
  },
  {
    title: "Strawberries",
    imageUrl: "https://picsum.photos/seed/4/300"
  },
  {
    title: "Deep Sea",
    imageUrl: "https://picsum.photos/seed/5/300"
  },
];

const Home: React.FC = () => {
  const { user, isLoading } = useUser();
  const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);

  const handleCardClick = (card: CardInfo) => {
    setSelectedCard(card);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  return (
    <PageLayout user={user} loading={isLoading}>
      <h1 className="text-3xl">Next.js and Auth0 Example</h1>
      <>
        <p>
          To test the login click on <i>Login</i>
        </p>
        <p>
          Once you have logged in you should be able to navigate between
          protected routes: client rendered, server rendered profile pages,
          and <i>Logout</i>
        </p>
      </>

      <div className="content-layout">
        <h1 id="page-title" className="text-3xl content__title">
          Life at a Glance
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>See where your salary goes and how much you can save.</span>
          </p>
        </div>
        <h2 className="text-xl">Community feed</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 grid grid-cols-2 gap-4">
            {/* Mapped over cards */}
            {cards.map((card) => (
              <CardComponent
                key={card.title}
                title={card.title}
                imageUrl={card.imageUrl}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </div>
          <div className="col-span-4">
            {/* Rendering PopupCard, passing the selected card's data */}
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <PopupCard
                  title={selectedCard?.title ?? ''}
                  imageUrl={selectedCard?.imageUrl ?? ''}
                  onClose={handleCloseCard}
                />
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
