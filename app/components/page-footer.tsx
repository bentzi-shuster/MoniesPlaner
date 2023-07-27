import React, { useState } from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  const isLightMode = false;

  return (
    <footer className={`lg shadow m-4 ${isLightMode ? 'dark:bg-gray-800' : ''}`}>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className={`text-sm text-${isLightMode ? 'gray-500' : 'gray-400'} sm:text-center ${isLightMode ? 'dark:text-gray-400' : 'text-gray-500'}`}>
          © 2023 <a href="https://flowbite.com/" className="hover:underline">MoniesPlanner™</a>. All Rights Reserved.
        </span>
        <ul className={`flex flex-wrap items-center mt-3 text-sm font-medium text-${isLightMode ? 'gray-500' : 'gray-400'} ${isLightMode ? 'dark:text-gray-400' : 'text-gray-500'} sm:mt-0`}>
          <li>
            <Link href="/about" className={`mr-4 hover:underline ${isLightMode ? 'md:mr-6' : ''}`}>About</Link>
          </li>
          <li>
            <a href="#" className={`mr-4 hover:underline ${isLightMode ? 'md:mr-6' : ''}`}>Privacy Policy</a>
          </li>
          <li>
            <a href="#" className={`mr-4 hover:underline ${isLightMode ? 'md:mr-6' : ''}`}>Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
