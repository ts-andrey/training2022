/*  ----- NECESSARY TASK SOLUTION ---- */
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

// some default examples to check for errors
const a = { x: 1 };
const b = { x: 2, y: 2 };
const c = { a: 4, c: 9, b: 1 };
const d = { z: 8, b: 7, y: 2 };

// console.log(add(a, b, c, d));

/*  ----- ADDITIONAL TASK SOLUTION ---- */
function intersect(...array) {
  // check for amount of arguments
  if (array.length < 1) {
    return {};
  } else if (array.length === 1) {
    return array[0];
  } else {
    let result = {};
    const argKeyArr = [];
    const argValArr = [];

    // getting all object keys and values to work with
    array.forEach(el => {
      argKeyArr.push(Object.keys(el));
      argValArr.push(Object.values(el));
    });
    // set first object keys and values to check them for equality with other objects
    const workObjKeys = argKeyArr[0];
    const workObjVals = argValArr[0];

    // loop through all work object keys
    for (let i = 0; i < workObjKeys.length; i++) {
      let isFieldExist = true;
      // check if current key/value pair exist in all objects
      for (let j = 1; j < argKeyArr.length; j++) {
        let isFieldExistTemp = true;
        if (isFieldExist) {
          // check for existense of the current key
          if (isFieldExistTemp) {
            isFieldExistTemp = argKeyArr[j].includes(workObjKeys[i]);
          }
          // if found check for the value equality
          if (isFieldExistTemp) {
            const valueIndex = argKeyArr[j].indexOf(workObjKeys[i]);
            isFieldExistTemp = argValArr[j][valueIndex] === workObjVals[i];
          }
          isFieldExist = isFieldExistTemp;
        }
      }
      // if all checks passed -> add pair to the result
      if (isFieldExist) {
        result[workObjKeys[i]] = workObjVals[i];
      }
    }
    return result;
  }
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
