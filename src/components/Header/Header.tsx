import React from 'react';
import Image from 'next/image';
import NavMenu from '../Nav/NavMenu';
import Link from 'next/link';

const HeaderElm = () => {
  return (
    <header className="bg-white flex items-center justify-between pl-5 h-[50px] shadow-sm shadow-stone-200 fixed top-0 w-full z-50">
      <Link href="/" className="flex items-center">

        <Image src="/monnies.svg" alt="Monnies Planner Logo" width={32} height={32} />
        <span className='text-2xl font-bold tracking-tight whitespace-nowrap'>MonniesPlanner </span>
      </Link>
      <div className="w-[75%] flex flex-row items-center justify-end">
        <NavMenu />
      </div>
    </header>
  );
};

export default HeaderElm;
