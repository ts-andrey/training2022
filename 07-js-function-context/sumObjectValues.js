function sumObjectValues(obj) {
  const result = Array.prototype.reduce.apply(Object.values(obj));
  console.log(result);
}
let object = {
  a: 2,
  name: 'John',
  age: 23,
};

sumObjectValues(object); // 25
