type isMatch = "Matched" | "Not Matched"

function caseInsensitiveSearch(string: string, searchString: string): isMatch {
    return string.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
        ? "Matched" : "Not Matched"
}
