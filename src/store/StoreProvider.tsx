'use client';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

interface IProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IProps> = (props) => {
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

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
