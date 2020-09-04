function cleanUndefinedNull(array: any[], callback: (err: Error | null, array: any[]) => void): void {
    let err: Error | null = null
    try {
        array = array.filter((element: any) => element !== undefined && element !== null)
    } catch (e) {
        err = e
    } finally {
        setTimeout(() => callback(err, array), 5000)
    }
}
