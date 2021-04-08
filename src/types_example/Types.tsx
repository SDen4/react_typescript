import React from 'react';

export const Sample: React.FC = () => {
  // string
  const str: string = 'Hello TS!';

  // boolean
  const isBoolean: boolean = true;

  // number
  const number: number = 45;

  // float
  const number2: number = 45.5;

  // number3
  const number3: number = 3e6;

  // array of numbers
  const arrayNum: number[] = [1, 2, 3, 4, 5];
  const arrayNum2: Array<number> = [1, 2, 3, 4, 5];

  // array of strings
  const arrayStr: string[] = ['one', 'two'];

  // tuple (array of different types)
  const arrayDif: [string, number] = ['one', 2];

  // any - для изменения типов, если это все-таки необходимо
  let any: any = '12';
  any = 12;

  // функция, которая ничего не возвращает
  function name(name: string): void {
    name = name + ' ';
  }

  // never
  function error(message: string): never {
    throw new Error(message);
  }

  return (
    <div className="types">
      <h1>Types</h1>
      <span>{str}</span>
      <span>{`${isBoolean ? 'true' : 'false'}`}</span>
      <span>{number}</span>
      <span>{number2}</span>
      <span>{number3}</span>
      <span>{arrayNum}</span>
      <span>{arrayNum2}</span>
      <span>{arrayStr}</span>
      <span>{arrayDif}</span>
      <span>
        {any}
        {typeof any}
      </span>
      <span>{name}</span>
      <span>{error}</span>
    </div>
  );
};
