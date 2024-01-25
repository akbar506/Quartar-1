"use strict";
function arrayLength(array) {
    let length_of_array = array.map((value) => {
        return value.length;
    });
    return length_of_array;
}
let array = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(arrayLength(array));
