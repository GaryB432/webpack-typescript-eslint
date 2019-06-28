import '../styles/app.scss';

import { Greeter } from './greeter';

const someObj = {
  b: 9,
  a: 4, // member out of order
};

export function someNumber() {
  // no return type
  return undefined;
}

console.log(someNumber()!); // non-null assertion

console.log(someObj);

const greeter: Greeter = new Greeter('webpack-typescript-eslint');

greeter.start(document.getElementById('app')!);
