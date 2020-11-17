const { cdf } = require('chi-squared');
const { throwError } = require('./utils');

const independenceTest = (observed, df) => {
    if (!Array.isArray(observed) || observed.length === 0) {
        throwError('expected frequency must be an array of size > 0');
    }

    const K = observed.length;
    const M = observed[0].length;
    const N = K * M;
    const ddof = (typeof df === 'number') ? (df) : (0);
    const rowSums = Array(K).fill(0);
    const colSums = Array(M).fill(0);
    for (let i = 0; i < K; i += 1) {
        for (let j = 0; j < M; j += 1) {
            rowSums[i] += observed[i][j];
            colSums[j] += observed[i][j];
        }
    }

    let chiSq = 0;
    for (let i = 0; i < K; i += 1) {
        for (let j = 0; j < M; j += 1) {
            const exp = (rowSums[i] * colSums[j]) / N;
            chiSq += ((observed[i][j] - exp) ** 2) / observed[i][j];
        }
    }

    return {
        value: chiSq,
        pValue: 1 - cdf(chiSq, (K - 1) * (M - 1) - ddof),
    };
};

module.exports = independenceTest;
