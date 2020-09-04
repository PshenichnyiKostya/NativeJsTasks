"use strict";
// Тут я сделал счет подстрок, у которых могу быть общие буквы
// Привер: string 'eeeee' substring 'ee' count 4
function countOccurrence(string, substring) {
    let count = 0;
    let lastIndex = 0;
    while (lastIndex !== -1) {
        lastIndex = string.indexOf(substring, lastIndex);
        if (lastIndex != -1) {
            count++;
            lastIndex = string.indexOf(substring[0], lastIndex + 1);
        }
    }
    return count;
}
