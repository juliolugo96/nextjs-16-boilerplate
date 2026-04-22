'use client';

import React from 'react';

import Button from '@/components/atoms/Button/Button';
import PatternCard from '@/components/molecules/PatternCard/PatternCard';
import type { PatternExample } from '@/features/patterns/types/patterns';
import { patternCategories, type PatternFilter } from '@/lib/patterns/registry';

import styles from './PatternExplorer.module.css';

interface IProps {
  activeFilter: PatternFilter;
  onFilterChange: (filter: PatternFilter) => void;
  patterns: PatternExample[];
}

const PatternExplorer: React.FC<IProps> = (props) => {
  // --- Hooks -----------------------------------------------------------------
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const { activeFilter, onFilterChange, patterns } = props;
  // --- END: Data and handlers ------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  return (
    <section className={styles.section}>
      <div className={styles.toolbar}>
        <div aria-label="Pattern filters" className={styles.filters}>
          {patternCategories.map((category) => (
            <Button
              isSelected={activeFilter === category}
              key={category}
              onClick={() => onFilterChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <p className={styles.count}>{patterns.length} patterns mapped</p>
      </div>

      <div className={styles.grid}>
        {patterns.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} />
        ))}
      </div>
    </section>
  );
};

export default PatternExplorer;
