import { useState } from 'react'
import { Tab } from '@headlessui/react'
import CardComponent from './card'

type TabProps = {
  communityCards: any;
  myPlanCards: any;
  onClick: (card: any) => void;
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabComponent = ({ communityCards, myPlanCards, onClick }: TabProps) => {

  let tabs = {
    'Community': communityCards,
    'My Plans': myPlanCards,
  };

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(tabs).map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(tabs).map((cards, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="grid grid-cols-2 gap-4">
                {cards.map((card) => (
                  <CardComponent
                    key={card.title}
                    title={card.title}
                    imageUrl={card.imageUrl}
                    onClick={() => onClick(card)}
                  />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default TabComponent;