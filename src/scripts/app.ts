const someObj = {
  b: 9,
  a: 4,  // member out of order
};

export function someNumber() { // no return type
  return undefined;
}

console.log(someNumber()!); // non-null assertion
