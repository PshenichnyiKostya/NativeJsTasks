"use strict";
function flatAndSort(array) {
    function recursion(array) {
        const arr = array.reduce(function (prev, curr) {
            if (!Array.isArray(curr) && typeof curr !== 'number') {
                throw new Error('Wrong format array');
            }
            if (Array.isArray(curr)) {
                curr = recursion(curr);
            }
            return prev.concat(curr);
        }, []);
        return arr;
    }
    return recursion(array).sort(function (a, b) {
        return a - b;
    });
}
