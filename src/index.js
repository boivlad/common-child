const commonChild = function(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const C = {};
  for (let i = 0; i <= m; i++) {
    C[i] = {};
    for (let j = 0; j <= n; j++) {
      C[i][j] = 0;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        C[i][j] = C[i - 1][j - 1] + 1;
      } else {
        C[i][j] = Math.max(C[i][j - 1], C[i - 1][j]);
      }
    }
  }
  return C[m][n];
};
const commonChildParse = function(str) {
  const arrayArgs = str.split(' ');
  return commonChild(arrayArgs[0], arrayArgs[1]);
};
module.exports.commonChild = commonChild;
module.exports.commonChildParse = commonChildParse;
