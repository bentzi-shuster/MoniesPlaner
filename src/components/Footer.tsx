import React from 'react';
import Link from 'next/link';
import { TwitterLogoIcon, GitHubLogoIcon, DiscordLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const socialNetworks = [
  { icon: <TwitterLogoIcon />, url: '#!' },
  { icon: <GitHubLogoIcon />, url: '#!' },
  { icon: <DiscordLogoIcon />, url: '#!' },
  { icon: <VercelLogoIcon />, url: '#!' },
]; 

const companyLinks = [
  { label: 'About Us', url: '#' },
  { label: 'Contact', url: '#' },
  { label: 'Jobs', url: '#' },
  { label: 'Press kit', url: '#' },
];

const legalLinks = [
  { label: 'Terms of use', url: '#' },
  { label: 'Privacy policy', url: '#' },
  { label: 'Cookie policy', url: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-10  bottom-0 w-full z-50">
      {/* Boxed Footer Content */}
      <div className="max-w-8xl mx-auto px-6 py-10 bg-[#1A202C] text-center text-neutral-600 dark:bg-[#1A202C] dark:text-white lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-white p-6 dark:border-[#FA8334] lg:justify-between">
          {/* Left Logo */}
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            {socialNetworks.map((network, index) => (
              <Link key={index} href={network.url} className="mr-6 text-neutral-600 dark:text-white">
                {network.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* Footer Links */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mt-4 flex justify-center">
                <Link href="/"><Image src="/monnies.svg" alt="Monnies Planner Logo" width={120} height={120} /></Link>
              </div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                MonniesPlanner:
              </h6>
              <p>
                Your Path to Financial Success!
              </p>

            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              {companyLinks.map((link, index) => (
                <p key={index} className="mb-4">
                  <Link href={link.url} className="text-neutral-600 dark:text-white">
                    {link.label}
                  </Link>
                </p>
              ))}
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Legal
              </h6>
              {legalLinks.map((link, index) => (
                <p key={index} className="mb-4">
                  <Link href={link.url} className="text-neutral-600 dark:text-white">
                    {link.label}
                  </Link>
                </p>
              ))}
            </div>
            {/* Newsletter */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Newsletter
              </h6>
              <div className="form-control w-full max-w-xs mx-auto md:mx-0">
                <label className="label block text-white">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="relative">
                  <input type="text" placeholder="   username@site.com" className="input input-bordered w-full pr-20 rounded-lg h-12" />
                  <button className="btn absolute top-0 right-0 rounded-r-lg text-white bg-[#FA8334] hover:bg-[#B0F0E6] h-12">Subscribe</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Footer Bottom */}
        <div className="bg-[#1A202C] p-6 text-center dark:bg-[#1A202C] rounded-b-lg">
          <span>© {new Date().getFullYear()} Copyright:</span>
          <Link href="/" className="font-semibold text-neutral-600 dark:text-[#17B890]">
            MonniesPlanner
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
