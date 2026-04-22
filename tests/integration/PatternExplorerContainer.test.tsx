import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

import PatternExplorerContainer from '@/features/patterns/containers/PatternExplorerContainer';
import { setActiveFilter } from '@/features/patterns/patternsSlice';
import { store } from '@/store/store';

import renderWithProviders from '../utils/renderWithProviders';

describe('PatternExplorerContainer', () => {
  beforeEach(() => {
    store.dispatch(setActiveFilter('all'));
  });

  it('filters visible pattern cards through Redux-backed UI state', async () => {
    const user = userEvent.setup();

    renderWithProviders(<PatternExplorerContainer />);

    expect(screen.getByText('Singleton')).toBeInTheDocument();
    expect(screen.getByText('Container/Presentational')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'react' }));

    expect(screen.queryByText('Singleton')).not.toBeInTheDocument();
    expect(screen.getByText('Container/Presentational')).toBeInTheDocument();
    expect(screen.getByText(/14 patterns mapped/i)).toBeInTheDocument();
  });
});
