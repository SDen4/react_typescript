import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

import styles from './Animation.module.css';

const Animation: React.FC = () => {
  const [compState, setCompState] = useState(true);
  const [compState2, setCompState2] = useState(true);

  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <button
          className={styles.customButton}
          onClick={() => {
            setCompState(!compState);
          }}
        >
          Animate
        </button>

        <button
          className={styles.customButton}
          onClick={() => {
            setCompState2(!compState2);
          }}
        >
          Animate2
        </button>
      </div>

      <div className={styles.wrapper}>
        <Transition
          in={compState}
          timeout={{ enter: 1000, exit: 500 }}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <div className={`${styles.block} ${state}`}>{state}</div>}
        </Transition>

        <CSSTransition
          in={compState2}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames="animationOrange"
        >
          <div className={`${styles.block} ${styles.orange}`}></div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Animation;
