"use strict";
function caseInsensitiveSearch(string, searchString) {
    return string.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
        ? "Matched" : "Not Matched";
}
