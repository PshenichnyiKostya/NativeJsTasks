"use strict";
function cleanUndefinedNull(array, callback) {
    let err = null;
    try {
        array = array.filter((element) => element !== undefined && element !== null);
    }
    catch (e) {
        err = e;
    }
    finally {
        setTimeout(() => callback(err, array), 5000);
    }
}
