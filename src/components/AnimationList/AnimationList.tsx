import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface IProps {
  items: any[];
  onRemove(id: number): void;
}

const AnimationList: React.FC<IProps> = ({ items, onRemove }) => (
  <TransitionGroup component={'ul'}>
    {items.map((item) => (
      <CSSTransition key={item.id} classNames="animationOrange" timeout={750}>
        <li onClick={() => onRemove(item.id)}>{item.title}</li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default AnimationList;
