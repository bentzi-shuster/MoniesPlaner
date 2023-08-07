'use client'
import React, { useEffect, useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const CookieModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const gdprResponse = localStorage.getItem('gdprResponse');
    if (gdprResponse !== 'accepted') {
      setIsOpen(true);
    }
  }, []);

  function onClose() {
    localStorage.setItem('gdprResponse', 'accepted');
    setIsOpen(false);
  }

  return (
    <AlertDialog.Root open={isOpen}>
      <AlertDialog.Portal container={typeof window !== 'undefined' ? document.body : undefined}>
        <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className=" w-96 2xl:w-1/5 pr-4 pl-4 pt-8 pb-8 fixed top-[50%] left-[50%] bg-white rounded-lg shadow-lg transform translate-x-[-50%] translate-y-[-50%]">
          <AlertDialog.Title className="text-xl font-semibold mb-4">
            Cookie Consent
          </AlertDialog.Title>
          <AlertDialog.Description className="group max-h-52 overflow-y-hidden hover:overflow-y-auto scrollbar-width-thin">
              <p>
                  Our website stores cookies on your device and discloses information in accordance with our Cookie Statement.
              </p>
              <p className="mt-2">
                  In accordance with the EU General Data Protection Regulation (GDPR), we need your consent to store and use cookies and other tracking technologies. These technologies help us enhance your browsing experience, display personalized content and ads, analyze website traffic, and better understand our visitors.
              </p>
          </AlertDialog.Description>

          <div className="flex justify-center">
            <button
              className="border border-transparent py-2 px-3 mt-7 items-center font-medium rounded-md text-white bg-[#17B890] hover:bg-[#5EEAD4] "
              onClick={onClose}
            >
              I understand
            </button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default CookieModal;