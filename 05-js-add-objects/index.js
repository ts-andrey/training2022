/*  ----- NECESSARY TASK SOLUTION ---- */
function add(...array) {
  const result = {};
  array.forEach(el => {
    const data = Object.entries(el);
    data.forEach(el => {
      result[el[0]] = (result[el[0]] || 0) + el[1];
    });
  });
  return result;
}

// some default examples to check for errors
const a = { x: 1 };
const b = { x: 2, y: 2 };
const c = { a: 4, c: 9, b: 1 };
const d = { z: 8, b: 7, y: 2 };

// console.log(add(a, b, c, d));

/*  ----- ADDITIONAL TASK SOLUTION ---- */
function intersect(...objs) {
  if (objs.length < 1) {
    return {};
  }
  const objEntryArr = [];
  objs.forEach(el => objEntryArr.push(Object.entries(el)));
  const workObjEntries = objEntryArr[0];
  return Object.fromEntries(
    workObjEntries.filter(el => objEntryArr.every(elem => elem.toString().includes(el.toString())))
  );
}

// zero equal props test case
/* const w = { a: 0, b: 1 };
const x = { c: 2, a: 1 };
const y = { d: 3, e: 4, a: 0 };
const z = { f: 5, g: 6, h: 7, a: 0 }; */

// one equal props test case
/* const w = { a: 0, b: 1 };
const x = { c: 2, a: 0 };
const y = { d: 3, e: 4, a: 0 };
const z = { f: 5, g: 6, h: 7, a: 0 }; */

// two equal props test case
/* const w = { a: 0, b: 1 };
const x = { c: 2, a: 0, b: 1 };
const y = { b: 1, d: 3, e: 4, a: 0 };
const z = { b: 1, f: 5, g: 6, h: 7, a: 0 }; */

// console.log(intersect(w, x, y, z));
