var chi = require('chi-squared')

const chisqindependence = (f_obs, ddof) => {

    if(!Array.isArray(f_obs) || f_obs.length == 0) {
        throwError('expected frequency must be an array of size > 0');
    }

    if(typeof ddof !== 'number') {
        ddof = f_obs.length-1;
    }

    const k = f_obs.length;
    const m = f_obs[0].length;
    const n = k*m;
    const rowsums = Array(k).fill(0);
    const colsums = Array(m).fill(0);
    
    
    for(let i=0;i<k;++i) {
        for(let j=0;j<m;++j) {
            rowsums[i] += f_obs[i][j];
            colsums[j] += f_obs[i][j];
        }
    }

    let chi_sq = 0;
    for(let i=0;i<k;++i) {
        for(let j=0;j<m;++j) {
            const exp = (rowsums[i] * colsums[j])/n;
            chi_sq += (Math.pow(f_obs[i][j] - exp, 2)/f_obs[i][j]);
        }
    }
    
    return {
        'value': chi_sq,
        'pValue': chi.cdf(chi_sq, ddof)
    };

}

module.exports = chisqindependence;
