const throwError = (msg) => {
    throw new TypeError(msg);
};

const reducer = (a, b) => a + b;

module.exports = {
    throwError, reducer,
};
