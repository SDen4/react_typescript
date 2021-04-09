import React from 'react';

// 1
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // 'name' | 'age'
let myName: PersonKeys = 'name';
myName = 'age';
//myName = 'job'; // вызовет ошибку!
console.log(myName);
// 1

//2
type User = {
  _id: number;
  name: string;
  email: string;
  createAt: Date;
};
// создание нового типа на основе имеющегося с исключениями
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAt'>; // остаются только поля 'name' & 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>; // второй вариант реализации
let u1: UserKeysNoMeta1 = 'name';
console.log(u1);
//u1 = '_id'; //выдаст ошибку
//2

export const Operators: React.FC = () => {
  return (
    <>
      <h1>Operators</h1>
    </>
  );
};
