import './globals.css'
import type { Metadata } from 'next'
import React, { ReactNode } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Footer from '../components/Footer';
import HeaderElm from '../components/Header/Header';
export const metadata: Metadata = {
  title: 'Monnies Planner',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <UserProvider>
        <body>
      <HeaderElm />
        {children}
      <Footer />
      </body>
      </UserProvider>
    </html>
  );
}

export default RootLayout