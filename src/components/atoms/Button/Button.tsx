import React from 'react';

import styles from './Button.module.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
}

const Button: React.FC<IProps> = (props) => {
  // --- Hooks -----------------------------------------------------------------
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const { children, className, isSelected = false, type = 'button', ...buttonProps } = props;
  const classes = [styles.button, isSelected ? styles.selected : null, className]
    .filter(Boolean)
    .join(' ');
  // --- END: Data and handlers ------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  return (
    <button
      aria-pressed={isSelected}
      className={classes}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
