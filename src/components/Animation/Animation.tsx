import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import styles from './Animation.module.css';

const Animation: React.FC = () => {
  const [compState, setCompState] = useState(true);

  return (
    <div className={styles.component}>
      <button
        className={styles.customButton}
        onClick={() => {
          setCompState(!compState);
        }}
      >
        Animate
      </button>

      <Transition
        in={compState}
        timeout={{ enter: 1000, exit: 500 }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => <div className={`${styles.block} ${state}`}>{state}</div>}
      </Transition>
    </div>
  );
};

export default Animation;
