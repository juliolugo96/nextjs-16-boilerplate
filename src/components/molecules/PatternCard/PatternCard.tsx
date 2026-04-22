import React from 'react';

import type { PatternExample } from '@/features/patterns/types/patterns';

import styles from './PatternCard.module.css';

interface IProps {
  pattern: PatternExample;
}

const PatternCard: React.FC<IProps> = (props) => {
  // --- Hooks -----------------------------------------------------------------
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const { pattern } = props;
  // --- END: Data and handlers ------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{pattern.name}</h2>
        <span className={styles.badge}>{pattern.category}</span>
      </div>
      <p className={styles.summary}>{pattern.summary}</p>
      <code className={styles.implementation}>{pattern.implementation}</code>
    </article>
  );
};

export default PatternCard;
