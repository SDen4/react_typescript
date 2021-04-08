interface Rect {
  readonly id: string;
  color: string;
  size?: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: 'qwqwqw',
  color: '#fff',
};

const rect2: Rect = {
  id: 'qwqwqw2',
  color: '#fff',
};

// add '?' prop to existed object
rect2.size = {
  width: 20,
  height: 10,
};

// приведение нового объекта при его инициализации к имеющемуся интерфейсу
const rect3 = {} as Rect;
const rect4 = <Rect>{};
