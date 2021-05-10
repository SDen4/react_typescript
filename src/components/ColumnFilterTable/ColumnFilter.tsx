import React from 'react';

interface IProps {
  column: any;
}

export const ColumnFilter: React.FC<IProps> = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Search:
      <input
        value={filterValue || ''}
        onChange={(event) => setFilter(event.target.value)}
      />
    </span>
  );
};
