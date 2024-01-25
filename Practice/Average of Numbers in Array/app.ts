let num_array:number[] = [3, 4, 6, 8, 2, 7, 4];

let sumofelements = 0
for(let i = 0; i < num_array.length; i++){
    sumofelements += num_array[i];
}
let average:number = sumofelements / num_array.length;

console.log(sumofelements);
console.log(average);