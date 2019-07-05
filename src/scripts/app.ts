import '../styles/app.scss';

import { Greeter } from './greeter';

const someObj = {
  a: 4,
  b: 9,
};

export function someNumber(): number | undefined {
  // no return type
  return undefined;
}

console.log(someNumber()); // non-null assertion

console.log(someObj);

const greeter: Greeter = new Greeter('webpack-typescript-eslint');

greeter.start(document.getElementById('app')!);
