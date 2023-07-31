"use client"
import React, { useEffect } from 'react';
import NavMenu from '../Nav/NavMenu';
import Link from 'next/link';
const HeaderElm = () => {
  return (
    <>
    <header className="bg-white flex flex-row items-center justify-between pl-5 h-[50px] shadow-sm shadow-stone-200">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-[25%] whitespace-nowrap
            ">
              <Link href="/">
              Monnies Planner 
              </Link>
              </h1>
            <div className="w-[75%] flex flex-row items-center justify-end">
            <NavMenu />
            </div>

        </header>

    </>
    )}


export default HeaderElm;
