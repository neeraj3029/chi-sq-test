function lengthCheck(expected, observed) {
    return true;
}

function chisqtest(expected, observed, params) {
    var sum = 0;
    for(var i=0;i<expected.length;++i) {
        sum += (Math.pow(observed[i] - expected[i], 2))/expected[i];
    }
    return {
        'sum': sum,
        'p-value': 0.05
    };
}

module.exports = chisqtest;