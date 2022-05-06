function permutation(str) {
  function permutate(string) {
    if (!string || typeof string !== 'string') {
      return 'Have to pass a string to get a proper result';
    } else if (string.length < 2) {
      return string;
    }

    const result = [];

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (string.indexOf(char) === i) {
        const remainingChars = `${string.slice(0, i)}${string.slice(i + 1)}`;

        for (let item of permutate(remainingChars)) {
          result.push(char + item);
        }
      }
    }
    return result;
  }
  return permutate(str).join(', ');
}

const testStr = 'abcd';
console.log(permutation(testStr));
