import React from 'react';

// example of js
function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim();
}
strip(2);

// example of classes
class MyResponse {
  header = 'response header';
  result = 'response result';
}
class MyError {
  header = 'error header';
  message = 'error result';
}
function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return { info: res.header + res.result };
  } else {
    return { info: res.header + res.message };
  }
}

// custom types
type AlertType = 'success' | 'danger';
function test(type: AlertType) {
  //somecode
}
test('success');
test('danger');
//test('default') //вызовет ошибку, т.к. такого типа не задано

export const Guards: React.FC = () => {
  return <h1>Guards</h1>;
};
