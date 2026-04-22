import React from 'react';

import Container from '@/components/atoms/Container/Container';
import PatternExplorerContainer from '@/features/patterns/containers/PatternExplorerContainer';

import styles from './PatternsPageTemplate.module.css';

interface IProps {}

const PatternsPageTemplate: React.FC<IProps> = () => {
  // --- Hooks -----------------------------------------------------------------
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
    <main className={styles.page}>
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Atomic Next.js boilerplate</p>
          <h1 className={styles.title}>TypeScript patterns workspace</h1>
          <p className={styles.description}>
            A ready starting point for App Router projects with atomic UI folders,
            Redux Toolkit wiring, strict TypeScript, and a practical map of
            JavaScript, React, Next.js, and performance patterns.
          </p>
        </header>

        <p className={styles.notice}>
          Patterns are examples and defaults, not mandatory architecture. Apply
          them where they solve a concrete problem.
        </p>

        <PatternExplorerContainer />
      </Container>
    </main>
  );
};

export default PatternsPageTemplate;
