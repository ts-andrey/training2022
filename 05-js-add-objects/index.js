function add(...array) {
  let result = {};
  array.forEach(el => {
    const data = Object.entries(el);
    data.forEach(el => {
      result[el[0]] = (result[el[0]] || 0) + el[1];
    });
  });
  return result;
}

const a = { x: 1 };
const b = { x: 2, y: 2 };

console.log(add(a, b, a));


