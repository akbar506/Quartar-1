"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    let suffix = 'th';
    if (numbers[i] === 1) {
        suffix = 'st';
    }
    else if (numbers[i] === 2) {
        suffix = 'nd';
    }
    else if (numbers[i] === 3) {
        suffix = 'rd';
    }
    console.log(numbers[i] + suffix);
}
