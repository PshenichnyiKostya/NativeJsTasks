function difference(arr1: any[], arr2: any): string[] {

    const set: Set<string> = new Set(arr1.map(function (value: any) {
        return JSON.stringify(value)
    }))

    arr2.forEach(function (item: any) {
        set.add(JSON.stringify(item))
    })

    const mySetValues = set.values()
    const arr: string[] = []
    for (const value of mySetValues) {
        arr.push(value.toString())
    }
    return arr
}
