const { cdf } = require('chi-squared');
const { throwError } = require('./utils');

const independenceTest = (observed, ddof) => {
    if (!Array.isArray(observed) || observed.length === 0) {
        throwError('expected frequency must be an array of size > 0');
    }

    const K = observed.length;
    const M = observed[0].length;
    const df = (typeof ddof === 'number') ? (ddof) : (0);
    const rowSums = Array(K).fill(0);
    const colSums = Array(M).fill(0);
    let n = 0;

    rowSums.forEach((rowEle, i) => {
        colSums.forEach((colEle, j) => {
            rowSums[i] += observed[i][j];
            colSums[j] += observed[i][j];
            n += observed[i][j];
        });
    });

    let chiSq = 0;
    rowSums.forEach((rowEle, i) => {
        colSums.forEach((colEle, j) => {
            const exp = (rowEle * colEle) / n;
            chiSq += ((observed[i][j] - exp) ** 2) / exp;
        });
    });

    return {
        value: chiSq,
        pValue: 1 - cdf(chiSq, (K - 1) * (M - 1) - df),
    };
};

module.exports = independenceTest;
