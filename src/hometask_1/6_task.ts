function uncamelize(string: string, substr: string = ''): string {
    const chars: string[] = []
    for (let i = 0; i < string.length; i++) {
        if (string[i].match((new RegExp('[A-Z]', 'g')))
            && string[i + 1].match((new RegExp('[A-Z]', 'g')))) {
            throw new Error('Wrong str format')
        }
        if (i !== 0 && string[i].match((new RegExp('[A-Z]', 'g')))) {
            chars.push(substr)
        }
        chars.push(string[i])
    }
    return chars.join('').toLowerCase()
}

