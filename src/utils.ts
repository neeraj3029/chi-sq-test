const throwError = (msg: string) => {
    throw new TypeError(msg);
};

const reducer = (a: number, b: number) => a + b;

export {
    throwError, reducer,
};
