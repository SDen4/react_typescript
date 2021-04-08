import React from 'react';

interface Rect {
  readonly id: string;
  color: string;
  size: {
    width: number;
    height: number;
  };
}

// наследование интерфейсов
interface RectWithArea extends Rect {
  gerArea: () => number;
}

// имплементирование класса по интерфейсу
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// interface for many idential types of props
interface IStyles {
  [key: string]: string;
}

export const Interfaces: React.FC = () => {
  const rect1: Rect = {
    id: 'qwqwqw',
    color: '#fff',
    size: {
      width: 10,
      height: 10,
    },
  };

  rect1.color = '#f3f3f3';

  const rect2: Rect = {
    id: 'qwqwqw2',
    color: '#fff',
    size: {
      width: 10,
      height: 10,
    },
  };

  // add '?' prop to existed object
  rect2.size = {
    width: 20,
    height: 10,
  };

  // приведение нового объекта при его инициализации к имеющемуся интерфейсу
  const rect3 = {} as Rect;
  // const rect4 = <Rect>{};

  rect3.color = '#f4f4f4';

  // наследование интерфейсов
  const rect5: RectWithArea = {
    id: '212121',
    color: '#aaa',
    size: {
      width: 30,
      height: 30,
    },
    gerArea(): number {
      return this.size?.width * this.size?.height;
    },
  };
  rect5.color = '#fff';

  // interface for many idential types of props
  const style: IStyles = {
    display: 'flex',
    border: '1px solid #fff',
    margin: '5px',
    padding: '10px',
  };
  style.display = 'block';

  return <h1>Interfaces</h1>;
};
