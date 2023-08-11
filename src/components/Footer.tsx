import React from 'react';
import Link from 'next/link';
import { TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const siteUrl = 'https://monniesplanner.vercel.app/';

const socialNetworks = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    </svg>, label: 'Share on FaceBook!', url: `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`},
  { icon: <TwitterLogoIcon />, label: 'Share on Twitter!', url: `https://twitter.com/intent/tweet?url=${siteUrl}&text=${"MonniesPlanner"}` },
  { icon: <LinkedInLogoIcon />, label: 'Share on LinkedIn!', url: `https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}` },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reddit" viewBox="0 0 16 16">
  <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
</svg>, label: 'Share on Reddit!', url: `https://www.reddit.com/submit?url=${siteUrl}&title=${"MonniesPlanner"}` },
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
      <div className="max-w-8xl mx-auto px-6 py-10 bg-[#1A202C] text-center text-white lg:text-left">
        <div className="flex items-center justify-center border-b-2 p-6 border-[#FA8334] lg:justify-between">
          {/* Left Logo */}
          <div className="mr-12 hidden lg:block">
            Share on social media:
          </div>
          <div className="flex justify-center">
            {socialNetworks.map((network, index) => (
              <Link key={index} href={network.url} aria-label={network.label} className="mr-6 text-white">
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
                  <Link href={link.url} className="text-white">
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
                  <Link href={link.url} className="text-white">
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
        <div className="bg-[#1A202C] p-6 text-center rounded-b-lg">
          <span>© {new Date().getFullYear()} Copyright:</span>
          <Link href="/" className="font-semibold  text-[#17B890]">
            MonniesPlanner
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
