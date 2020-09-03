function flatAndSort(array: any[]): number[] {

    function recursion(array: any[]): number[] {
        const arr = array.reduce(function (prev: number[], curr: any) {
            if (!Array.isArray(curr) && typeof curr !== 'number') {
                throw new Error('Wrong format array')
            }
            if (Array.isArray(curr)) {
                curr = recursion(curr)
            }
            return prev.concat(curr)
        }, [])
        return arr
    }

    return recursion(array).sort(function (a: number, b: number): number {
        return a - b
    })
}