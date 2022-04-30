function permutation(someString) {
  const shuffleArr = someString.split('');
  let result = [someString];
  const shuffleIndex = shuffleArr.length - 1;
  let shiftIndex = shuffleIndex;
  let counter = 0;
  function shuffle() {
    for (let i = shuffleIndex; i >= 1; i--) {
      const tempChar = shuffleArr.splice(i, 1);
      shuffleArr.splice(i - 1, 0, tempChar[0]);
      result.push(shuffleArr.join(''));
    }
  }
  function shift() {
    const shiftArr = someString.split('');
    const curChar = shiftArr.splice(shiftIndex, 1);
    shiftArr.push(curChar);
    for (let i = shiftIndex; i >= 1; i--) {
      const tempChar = shuffleArr.splice(i, 1);
      shuffleArr.splice(i - 1, 0, tempChar[0]);
      result.push(shuffleArr.join(''));
    }
  }
  while (shuffleIndex > counter) {
    shuffle();
    counter++;
  }
  while (shiftIndex > 0) {
    shift();
    shiftIndex--;
  }
  result = Array.from(new Set(result)).sort((a, b) => a.localeCompare(b)).join(', ');
  return result;
}

const testStr = 'abc';
console.log(permutation(testStr));
