"use strict";
function even_array(arr) {
    let even_array = arr.filter((x) => x % 2 == 0);
    return even_array;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(even_array(array));
