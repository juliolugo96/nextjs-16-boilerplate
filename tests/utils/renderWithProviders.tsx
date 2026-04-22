import React from 'react';
import { render, type RenderOptions } from '@testing-library/react';

import StoreProvider from '@/store/StoreProvider';

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  render(ui, {
    wrapper: StoreProvider,
    ...options,
  });

export default renderWithProviders;
