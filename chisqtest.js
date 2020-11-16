var chi = require('chi-squared')

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const throwError = msg => {
    throw new TypeError(msg);
}

const checkParams = (params) => {
    if(typeof params.bins !== 'number') {
        throw new TypeError('paramter k must be a number');
    }   
    if(typeof params.df !== 'number') {
        throw new TypeError('paramter degree of freedom must be a number');
    }   
}

const chisq = (f_obs, f_exp) => {
    let sum = 0;
    for(let i=0;i<f_exp.length;++i) {
        sum += (Math.pow(f_obs[i] - f_exp[i], 2))/f_exp[i];
    }
    return sum;
}

const chisqtest = (f_obs, f_exp, params) => {
    if(!Array.isArray(f_obs)) {
        throwError('expected frequency must be an array');
    }

    if(!Array.isArray(f_exp)) {
        params = f_exp
        f_exp = [];
        exp = f_obs.reduce(reducer)/f_obs.length;
        for(let i=0;i<f_obs.length;i++) {
            f_exp.push(exp);
        }
    }

    defaultParams = {
        'bins': f_exp.length,
        'df': f_exp.length-1
    };

    params = Object.assign(defaultParams, params);

    console.log(f_obs, f_exp, params);
    checkParams(params);
    if (f_exp.length !== f_obs.length) {
        throwError('Observed and expected frequency arrays must be of same length');
    }

    const sum = chisq(f_obs, f_exp);
    
    return {
        'value': sum,
        'p-value': chi.cdf(sum, params.df)
    };
}

module.exports = chisqtest;
