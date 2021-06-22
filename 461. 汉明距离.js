/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2);
    y = y.toString(2);
    let maxLength = Math.max(x.length, y.length);
    x = x.padStart(maxLength, 0);
    y = y.padStart(maxLength, 0);
    let ans = 0;
    for (let i = 0; i < maxLength; i++) {
        if (x[i] !== y[i]) ans++;
    }
    return ans;
};
