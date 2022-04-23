function sumObjectValues(obj) {
  // first solution
  return Array.prototype.reduce.call(Object.values(obj), (a, b) => (typeof b === 'number' ? a + b : a));

  // second solution
  // return [].reduce.apply(Object.values(obj), [(a, b) => (typeof b === 'number' ? a + b : a)]);
}
let object = {
  a: 2,
  name: 'John',
  age: 23,
  c: '100',
  b: true,
  else: 1,
};

console.log(sumObjectValues(object)); // 26
