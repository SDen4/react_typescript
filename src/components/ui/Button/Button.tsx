import React from 'react';

import styles from './Button.module.css';

interface IProps {
  typeButton: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  btnAddClass?: string;
}

export const Button: React.FC<IProps> = (props) => {
  const { typeButton, onClick, btnAddClass } = props;

  return (
    <button
      type={typeButton}
      onClick={onClick}
      className={`${styles.button} ${btnAddClass}`}
    >
      {props.children}
    </button>
  );
};
