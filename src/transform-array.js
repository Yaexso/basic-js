const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const currentElem = arr[i];

    if (currentElem === '--double-next') {
      if (i + 1 < arr.length) {
        transformedArr.push(arr[i + 1]);
      }
    } else if (currentElem === '--discard-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        transformedArr.pop();
      }
    } else if (currentElem === '--discard-next') {
      if (i + 1 < arr.length) {
        i += 1;
      }
    } else if (currentElem === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        transformedArr.push(arr[i - 1]);
      }
    } else {
      transformedArr.push(currentElem);
    }
  }

  return transformedArr;
}

module.exports = {
  transform
};
