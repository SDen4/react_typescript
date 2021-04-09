import React from 'react';

export const Functions: React.FC = () => {
  // types of arguments and function result
  function add(a: number, b: number): number {
    return a + b;
  }
  add(2, 3);
  function str(str: string): string {
    return str.trim().toLocaleUpperCase();
  }
  str('sTrInG');

  // function with some params
  interface MyPosition {
    x: number | undefined;
    y: number | undefined;
  }
  // interface MyPositionWithDefault extends MyPosition {
  //   default: string;
  // }
  function position(): MyPosition;
  // function position(a: number): MyPositionWithDefault;
  function position(a: number, b: number): MyPosition;

  function position(a?: number, b?: number) {
    if (!a && !b) {
      return { x: undefined, y: undefined };
    }
    if (a && !b) {
      return { x: a, y: undefined, default: '' };
    }
    return { x: a, y: b };
  }
  position();
  // position(10);
  position(10, 20);

  return <h1>Functions</h1>;
};
