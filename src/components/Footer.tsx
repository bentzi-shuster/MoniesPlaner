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
    <footer className="mt-10">
      {/* Boxed Footer Content */}
      <div className="max-w-8xl mx-auto px-6 py-10 bg-[#1A202C] text-center text-neutral-600 dark:bg-[#1A202C] dark:text-white lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-white p-6 dark:border-[#FA8334] lg:justify-between">
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

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                MonniesPlanner:
              </h6>
              <p>
                Your Path to Financial Success!
              </p>
              <div className="mt-4 flex justify-center">
                <Link href="/"><Image src="/monnies.svg" alt="Monnies Planner Logo" width={120} height={120} /></Link>
              </div>
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
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                {/* Contact icon SVG content */}
                New York, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                {/* Email icon SVG content */}
                info@example.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                {/* Phone icon SVG content */}
                + 01 234 567 88
              </p>
            </div>
          </div>
        </div>

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
