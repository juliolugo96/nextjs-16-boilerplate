'use client';

import React from 'react';

import PatternExplorer from '@/components/organisms/PatternExplorer/PatternExplorer';
import { usePatternFilter } from '@/features/patterns/hooks/usePatternFilter';
import { patternRegistry } from '@/lib/patterns/registry';

interface IProps {}

const PatternExplorerContainer: React.FC<IProps> = () => {
  // --- Hooks -----------------------------------------------------------------
  const { activeFilter, filteredPatterns, updateFilter } = usePatternFilter(patternRegistry);
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  // --- END: Data and handlers ------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  return (
    <PatternExplorer
      activeFilter={activeFilter}
      onFilterChange={updateFilter}
      patterns={filteredPatterns}
    />
  );
};

export default PatternExplorerContainer;
