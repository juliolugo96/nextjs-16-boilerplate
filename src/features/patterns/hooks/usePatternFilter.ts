'use client';

import React from 'react';

import { setActiveFilter } from '@/features/patterns/patternsSlice';
import type { PatternExample } from '@/features/patterns/types/patterns';
import type { PatternFilter } from '@/lib/patterns/registry';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export const usePatternFilter = (patterns: PatternExample[]) => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state) => state.patterns.activeFilter);

  const filteredPatterns = React.useMemo(() => {
    if (activeFilter === 'all') {
      return patterns;
    }

    return patterns.filter((pattern) => pattern.category === activeFilter);
  }, [activeFilter, patterns]);

  const updateFilter = React.useCallback(
    (filter: PatternFilter) => {
      dispatch(setActiveFilter(filter));
    },
    [dispatch],
  );

  return {
    activeFilter,
    filteredPatterns,
    updateFilter,
  };
};
