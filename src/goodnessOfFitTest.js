/* eslint-disable no-param-reassign */
const { cdf } = require('chi-squared');
const { throwError, reducer } = require('./utils');

const goodnessOfFit = (observed, expected, ddof) => {
    if (!Array.isArray(observed) || observed.length === 0) {
        throwError('expected frequency must be an array of size > 0');
    }
    let df = ddof;
    if (!Array.isArray(expected)) {
        df = expected;
        expected = Array(observed.length).fill(observed.reduce(reducer) / observed.length);
    }

    if (expected.length !== observed.length) {
        throwError('Observed and expected frequency arrays must be of same length');
    }

    if (typeof df !== 'number') {
        df = 0; // default value of df is (length - 1)
    }

    const chisq = observed.reduce((a, c, i) => a + (((c - expected[i]) ** 2) / expected[i]), 0);
    return {
        value: chisq,
        pValue: 1 - cdf(chisq, observed.length - 1 - df),
    };
};

module.exports = goodnessOfFit;
