"use strict";
let num_array = [3, 4, 6, 8, 2, 7, 4];
let sumofelements = 0;
for (let i = 0; i < num_array.length; i++) {
    sumofelements += num_array[i];
}
let average = sumofelements / num_array.length;
console.log(average);
console.log(sumofelements);
