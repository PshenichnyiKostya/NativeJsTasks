"use strict";
// Здесь аналогично с 4ым задание сделал рекурсию.
function objectToList(object) {
    const arr = [];
    function recursion(object) {
        Object.keys(object).forEach(key => {
            if (typeof Reflect.get(object, key) === "object") {
                arr.push(objectToList(Reflect.get(object, key)));
            }
            else {
                object[Reflect.get(object, key)] = key;
                arr.push(`${key},${Reflect.get(object, key)}`);
            }
        });
    }
    recursion(object);
    return arr;
}
