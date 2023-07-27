"use client"
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import PageLayout from './components/page-layout';
import CardComponent from './components/card';
import PopupCard from './components/popup-card';

const Home = () => {
  const { user, isLoading } = useUser();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (title: string, imageUrl: string) => {
    setSelectedCard({ title, imageUrl });
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
            {/* Add onClick prop to each card */}
            <CardComponent
              title="Bad Bear"
              imageUrl="https://cdn.discordapp.com/attachments/1069455158922190948/1121622537655308438/47920001.JPG"
              onClick={() =>
                handleCardClick(
                  'Bad Bear',
                  'https://cdn.discordapp.com/attachments/1069455158922190948/1121622537655308438/47920001.JPG'
                )
              }
            />
            <CardComponent
              title="The Mandalorian as a 1990s anime aesthetic"
              imageUrl="https://cdn.midjourney.com/ddd2bdba-45bd-4256-b93b-dce46aae4d2d/grid_0.webp"
              onClick={() =>
                handleCardClick(
                  'The Mandalorian as a 1990s anime aesthetic',
                  'https://cdn.midjourney.com/ddd2bdba-45bd-4256-b93b-dce46aae4d2d/grid_0.webp'
                )
              }
            />
            <CardComponent title="Nature" imageUrl="https://picsum.photos/seed/3/300"
              onClick={() =>
                handleCardClick(
                  'Nature',
                  'https://picsum.photos/seed/3/300'
                )} />
            <CardComponent title="Strawberries" imageUrl="https://picsum.photos/seed/4/300"
              onClick={() =>
                handleCardClick(
                  'Strawberries',
                  'https://picsum.photos/seed/4/300'
                )} />
            <CardComponent title="Deep Sea" imageUrl="https://picsum.photos/seed/5/300"
              onClick={() =>
                handleCardClick(
                  'Deep Sea',
                  'https://picsum.photos/seed/5/300'
                )} />
          </div>
          <div className="col-span-4">
            {/* Display the selected card's title in the PopupCard */}
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <PopupCard title={selectedCard?.title} imageUrl={selectedCard?.imageUrl} />
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
// fast/cached SSR page
export default Home