import { javascriptPatterns } from '@/lib/patterns/javascript';
import { reactPatterns } from '@/lib/patterns/react';
import type { PatternExample } from '@/features/patterns/types/patterns';

export const patternRegistry: PatternExample[] = [
  ...javascriptPatterns,
  ...reactPatterns,
];

export const patternCategories = ['all', 'javascript', 'react', 'performance'] as const;

export type PatternFilter = (typeof patternCategories)[number];
