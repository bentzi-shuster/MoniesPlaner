import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-8 fixed bottom-0 z-10 left-0 right-0">
      <div className="container mx-auto max-w-screen-lg flex justify-between items-center px-4 ">
        <div className="text-gray-600 text-sm">
          © 2023 <a href="#" className="text-green-600 hover:underline">MoniesPlanner™</a>. All Rights Reserved.
        </div>
        <ul className="flex space-x-6 text-sm text-gray-600 flex-col lg:flex-row whitespace-nowrap justify-end text-end">
          <li>
            <Link href="#"className="hover:underline">About</Link>
          </li>
          <li>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Licensing</a>
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
