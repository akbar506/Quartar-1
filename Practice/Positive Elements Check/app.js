"use strict";
function PositiveElementCheck(array) {
    let positive_element = array.every((num) => num > 0);
    return positive_element;
}
let sample_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(PositiveElementCheck(sample_array));
