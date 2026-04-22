export type PatternCategory = 'javascript' | 'react' | 'performance';

export interface PatternExample {
  id: string;
  name: string;
  category: PatternCategory;
  summary: string;
  implementation: string;
  source: 'Patterns.dev';
}
