"use client"
import React, { useEffect } from 'react';
import NavMenu from '../Nav/NavMenu';

const HeaderElm = () => {
  return (
    <>
    <header className="bg-white flex flex-row items-center justify-between pl-5 h-[50px] shadow-sm shadow-stone-200">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-[25%] whitespace-nowrap
            ">Monnies Planner</h1>
            <div className="w-[75%] flex flex-row items-center justify-end">
            <NavMenu />
            </div>

        </header>

    </>
    )}


export default HeaderElm;
