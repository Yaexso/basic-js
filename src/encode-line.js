const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }

  let encoded = '';
  let count = 1;

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      if (count > 1) {
        encoded += count;
      }

      encoded += str[i - 1];
      count = 1;
    }
  }

  if (count > 1) {
    encoded += count;
  }

  return (encoded += str[str.length - 1]);
}

module.exports = {
  encodeLine
};
