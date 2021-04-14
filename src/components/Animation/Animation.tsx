import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import AnimationList from '../AnimationList/AnimationList';

import styles from './Animation.module.css';

const Animation: React.FC = () => {
  const [compState, setCompState] = useState(true);
  const [compState2, setCompState2] = useState(true);

  const [items, setItems] = useState([
    { id: 1, title: 'Item1' },
    { id: 2, title: 'Item2' },
    { id: 3, title: 'Item3' },
  ]);

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = () => {
    const title = prompt('Enter item title')!.toString();
    const id = Math.round(Math.random() * 100);
    setItems(items.concat([{ id, title }]));
  };

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

        <button className={styles.customButton} onClick={addItem}>
          Add Item
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
      <AnimationList items={items} onRemove={removeItem} />
    </div>
  );
};

export default Animation;
