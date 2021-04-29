/**
 * @param {string} digits
 * @return {string[]}
 */
// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
var letterCombinations = function(digits) {
    let map={
      '2': "abc",
      '3': "def",
      '4': "ghi",
      '5':"jkl",
      '6': "mno",
      '7': "pqrs",
      '8': "tuv",
      '9': "wxyz"
    }
};