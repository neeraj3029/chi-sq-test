const chisqtest = require('./good_of_fit.js')
const indped = require('./independence.js')

observed = [1,2,4,5];

expected = [
    2,2,2,2
];

const res = chisqtest(observed, 3);
console.log(res);

const res2 = indped(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
);
