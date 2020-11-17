var chi = require('chi-squared');
const { reducer, throwError} = require('./utils.js');

const ChiSq = (f_obs, f_exp) => {
    let sum = 0;
    for(let i=0;i<f_exp.length;++i) {
        sum += (Math.pow(f_obs[i] - f_exp[i], 2))/f_exp[i];
    }
    return sum;
}


const goodnessOfFit = (f_obs, f_exp, ddof) => {

    if(!Array.isArray(f_obs) || f_obs.length == 0) {
        throwError('expected frequency must be an array of size > 0');
    }

    if(!Array.isArray(f_exp)) {
        ddof = f_exp;
        f_exp = [];
        const exp = f_obs.reduce(reducer)/f_obs.length;
        for(let i=0;i<f_obs.length;i++) {
            f_exp.push(exp);
        }
    }

    if (f_exp.length !== f_obs.length) {
        throwError('Observed and expected frequency arrays must be of same length');
    }

    if(typeof ddof !== 'number') {
        ddof = f_obs.length-1;
    }

    const sum = ChiSq(f_obs, f_exp);
    
    return {
        'value': sum,
        'pValue': 1-chi.cdf(sum, ddof)
    };
}

module.exports = goodnessOfFit;
