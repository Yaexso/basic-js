const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCount1 = {};

  for (const char of s1) {
    if (charCount1[char] !== undefined) {
      charCount1[char] += 1;
    } else {
      charCount1[char] = 1;
    }
  }

  const charCount2 = {};

  for (const char of s2) {
    if (charCount2[char] !== undefined) {
      charCount2[char] += 1;
    } else {
      charCount2[char] = 1;
    }
  }

  let count = 0;

  for (const char in charCount1) {
    if (charCount2[char]) {
      let minCount;

      if (charCount1[char] < charCount2[char]) {
        minCount = charCount1[char];
      } else {
        minCount = charCount2[char];
      }

      count += minCount;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
