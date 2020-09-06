"use strict";
function promiseSeries(tasks) {
    return tasks.reduce((curPromise, prevPromise) => curPromise.then((result) => prevPromise.then((res) => {
        return [...result, res];
    })), Promise.resolve([]));
}
