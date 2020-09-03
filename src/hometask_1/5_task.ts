// Здесь аналогично с 4ым задание сделал рекурсию.
function objectToList(object: object): any[] {
    const arr: any[] = []

    function recursion(object: any): void {
        Object.keys(object).forEach(key => {
            if (typeof Reflect.get(object, key) === "object") {
                arr.push(objectToList(Reflect.get(object, key)))
            } else {
                object[Reflect.get(object, key)] = key
                arr.push(`${key},${Reflect.get(object, key)}`)
            }
        })
    }

    recursion(object)
    return arr
}