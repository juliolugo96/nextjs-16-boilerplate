import type { Metadata } from 'next';
import React from 'react';

import '@/styles/globals.css';
import StoreProvider from '@/store/StoreProvider';

export const metadata: Metadata = {
  title: 'Next.js TypeScript Patterns Boilerplate',
  description: 'Atomic design boilerplate with JavaScript and React patterns.',
};

interface IProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IProps> = (props) => {
  // --- Hooks -----------------------------------------------------------------
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const { children } = props;
  // --- END: Data and handlers ------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
