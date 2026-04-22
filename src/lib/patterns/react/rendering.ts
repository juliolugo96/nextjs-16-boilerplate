import dynamic from 'next/dynamic';

export const LazyPatternExplorer = dynamic(
  () => import('@/components/organisms/PatternExplorer/PatternExplorer'),
  {
    ssr: false,
  },
);
