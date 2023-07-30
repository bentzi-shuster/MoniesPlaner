import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-8">
      <div className="container mx-auto max-w-screen-lg flex justify-between items-center px-4">
        <div className="text-gray-600 text-sm">
          © 2023 <a href="https://flowbite.com/" className="text-green-600 hover:underline">MoniesPlanner™</a>. All Rights Reserved.
        </div>
        <ul className="flex items-center space-x-6 text-sm text-gray-600">
          <li>
            <Link href="/about"className="hover:underline">About
            </Link>
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
