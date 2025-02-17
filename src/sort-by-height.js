const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const heights = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== -1) {
      heights.push(arr[i]);
    }
  }

  heights.sort((a, b) => a - b);

  const sortedArr = [];
  let heightIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      sortedArr.push(-1);
    } else {
      sortedArr.push(heights[heightIndex]);
      heightIndex += 1;
    }
  }

  return sortedArr;
}

module.exports = {
  sortByHeight
};
