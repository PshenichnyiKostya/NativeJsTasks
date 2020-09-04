"use strict";
function myPromise() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(123);
            }, 6000);
        }
        catch (e) {
            reject(e);
        }
    });
}
