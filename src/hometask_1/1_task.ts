function fibonacciSeries(number: number): Array<number> {
    if (number < 0) throw new Error("Invalid number value")
    if (number === 0) return []
    if (number === 1) return [0]
    const arr: number[] = [0, 1, 1]
    while (arr[arr.length - 1] + arr[arr.length - 2] < number) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr
}
