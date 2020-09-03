// Сделал рекурсивный обход по объекту и в каждом свапал свойства со значениями
function getCopyObject(object: object): object {
    const copyObject = object

    function recursion(object: any): void {
        Object.keys(object).forEach(key => {
            if (typeof Reflect.get(object, key) === "object") {
                getCopyObject(Reflect.get(object, key))
            } else {
                object[Reflect.get(object, key)] = key
                delete object[key]
            }
        })
    }

    recursion(copyObject)
    return copyObject
}