function promiseSeries(tasks: Array<Promise<any>>): Promise<any> {
    return tasks.reduce((curPromise: Promise<any>, prevPromise: Promise<any>) =>
            curPromise.then((result: any[]) => prevPromise.then((res: any) => {
                return [...result, res]
            })),
        Promise.resolve([])
    )
}
