import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import styles from './Animation.module.css';

const Animation: React.FC = () => {
  const [state, setState] = useState(true);

  return (
    <div className={styles.component}>
      <button
        className={styles.customButton}
        onClick={() => {
          setState(!state);
        }}
      >
        Animate
      </button>

      <Transition in={state} timeout={1000}>
        <div className={`${state && styles.animation} ${styles.block}`} />
      </Transition>
    </div>
  );
};

export default Animation;
