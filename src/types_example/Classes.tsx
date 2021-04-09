import React, { Component } from 'react';

// class Car {
//   readonly model: string; //readonly можно перезаписать только внутри конструктора (см.ниже)
//   readonly numOfWheels: number = 4;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
// идентичная запись класса выше
// class Car {
//   readonly numOfWheels: number = 4;
//   constructor(readonly model: string) {}
// }

// Модификаторы //
class Animal {
  protected voice: string = '';
  public color: string = 'black'; // если не указывать, по умолчанию будет public
  public go() {
    console.log('Go!');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice('mew-mew');
cat.color = 'white';
console.log(cat);
// Модификаторы //

// Абстрактные классы //
abstract class Test {
  abstract render(): void;
  abstract info(): string;
}

class NewTest extends Test {
  render(): void {
    console.log('NewTest class');
  }
  info(): string {
    return 'NewTest';
  }
}
console.log(NewTest);
// Абстрактные классы //

export class Classes extends Component {
  return() {
    <h1>Classes</h1>;
  }
}
