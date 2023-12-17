"use strict";
function divisible(num) {
    if (num % 3 == 0) {
        console.log(`${num} is divisible by 3`);
        if (num % 5 == 0) {
            console.log(`${num} is also divisible by 5`);
        }
        else {
            console.log(`${num} is not divisible by 5`);
        }
    }
    else if (num % 5 == 0) {
        console.log(`${num} is divisible by 5`);
        if (num % 3 == 0) {
            console.log(`${num} is also divisible by 3`);
        }
        else {
            console.log(`${num} is not divisible by 3`);
        }
    }
    else {
        console.log(`${num} is not divisible by both 3 and 5`);
    }
}
divisible(22);
