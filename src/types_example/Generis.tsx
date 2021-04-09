import React from 'react';

export const Generic: React.FC = () => {
  const arrayOfNum: Array<number> = [1, 2, 3, 4, 5];
  const arrayOfStr: Array<string> = ['one', 'two'];

  function reverse<T>(array: T[]): T[] {
    return array.reverse();
  }
  const arrayOfNumRes = reverse(arrayOfNum);
  const arrayOfStrRes = reverse(arrayOfStr);

  return (
    <>
      <h1>Generic</h1>
      {arrayOfNumRes}
      {arrayOfStrRes}
    </>
  );
};
