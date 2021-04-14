import React, { useState } from 'react';

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

      {state && (
        <div className={`${state && styles.animation} ${styles.block}`} />
      )}
    </div>
  );
};

export default Animation;
