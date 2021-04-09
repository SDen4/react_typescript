import React, { Component } from 'react';

// class Car {
//   readonly model: string; //readonly можно перезаписать только внутри конструктора (см.ниже)
//   readonly numOfWheels: number = 4;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
// идентичная запись класса выше
class Car {
  readonly numOfWheels: number = 4;
  constructor(readonly model: string) {}
}

export class Classes extends Component {
  return() {
    <h1>Classes</h1>;
  }
}
