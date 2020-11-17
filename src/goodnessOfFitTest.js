/* eslint-disable no-param-reassign */
const { cdf } = require('chi-squared');
const { throwError, reducer } = require('./utils');

const goodnessOfFit = (observed, expected, df) => {
    if (!Array.isArray(observed) || observed.length === 0) {
        throwError('expected frequency must be an array of size > 0');
    }

    let ddof = df;
    if (!Array.isArray(expected)) {
        ddof = expected;
        expected = Array(observed.length).fill(observed.reduce(reducer) / observed.length);
    }

    if (expected.length !== observed.length) {
        throwError('Observed and expected frequency arrays must be of same length');
    }

    if (typeof ddof !== 'number') {
        ddof = observed.length - 1; // default value of ddof is (length - 1)
    }

    const chisq = observed.reduce((a, c, i) => a + (((c - expected[i]) ** 2) / expected[i]), 0);

    return {
        value: chisq,
        pValue: 1 - cdf(chisq, ddof),
    };
};

module.exports = goodnessOfFit;
