var test = require('./chisqtest.js')

params = {
    'ddof': 0,
    'bins': 4 
}
observed = [1,2,4,5];
expected = [
    2,2,2,2
];

var res = test(observed);
console.log(res);
