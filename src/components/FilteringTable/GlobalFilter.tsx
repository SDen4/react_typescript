import React from 'react';

interface IProps {
  filter: string;
  setFilter(event: string): void;
}

export const GlobalFilter: React.FC<IProps> = ({ filter, setFilter }) => {
  return (
    <span>
      Search:
      <input
        value={filter || ''}
        onChange={(event) => setFilter(event.target.value)}
      />
    </span>
  );
};
