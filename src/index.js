module.exports = function multiply(first, second) {
  //===Column multiplication
  //=========================
  // Second string in multiplication will be always shorter
  if (first.length < second.length) {
    [first, second] = [second, first];
  }

  const num2 = second.split('').reverse();
  const num1 = first.split('').reverse();
  const result = [];

  for (let i = 0; i < num2.length; i++) {
    for (let m = 0; m < num1.length; m++) {
      let index = i + m; // Get the current array position.
      result[index] =
        num2[i] * num1[m] + (index >= result.length ? 0 : result[index]);

      if (result[index] > 9) {
        // Carrying
        result[index + 1] =
          Math.floor(result[index] / 10) +
          (index + 1 >= result.length ? 0 : result[index + 1]);
        result[index] %= 10;
      }
    }
  }
  return result.reverse().join('');
};
