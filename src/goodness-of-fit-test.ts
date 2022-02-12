import { cdf } from 'chi-squared';
import { throwError, reducer } from './utils';
import { IPValue } from '../models';

const goodnessOfFit = (observed: number[], expected?: number[], ddof = 0): IPValue => {
    if (!observed?.length) {
        throwError('expected frequency must be an array of size > 0');
    }

    if (!expected && observed?.length > 0) {
        expected = Array.apply(null, Array(observed.length)).map(Number.prototype.valueOf, 0);
        // expected = new Array(observed.length).fill(observed.reduce(reducer) / observed.length);
    } else if (expected?.length !== observed.length) {
        throwError('Observed and expected frequency arrays must be of same length');
    }

    // @ts-ignore
    const chisq = observed.reduce((a, c, i) => a + (((c - expected[i]) ** 2) / expected[i]), 0);
    return {
        value: chisq,
        pValue: 1 - cdf(chisq, observed.length - 1 - ddof),
    };
};

export { goodnessOfFit };
