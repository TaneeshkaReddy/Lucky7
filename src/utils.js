/* Gets random integer: [1..6]. */
// 6 because: 6 sided dice
function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

/** Create array of n die rolls => [num, ...]. */

function getRolls(n) {
  return Array.from({ length: n }, () => d6());
}

/** Get sum of nums. */

function sum(nums) {
  return nums.reduce((prev, cur) => prev + cur, 0);
}

export { d6, getRolls, sum };
