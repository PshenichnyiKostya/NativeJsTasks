"use strict";
function difference(arr1, arr2) {
    const set = new Set(arr1.map(function (value) {
        return JSON.stringify(value);
    }));
    arr2.forEach(function (item) {
        set.add(JSON.stringify(item));
    });
    const mySetValues = set.values();
    const arr = [];
    for (const value of mySetValues) {
        arr.push(value.toString());
    }
    return arr;
}
