let array:number[] = [10, 13, 17, 2, 6, 9, 1, 11, 14, 16];
let specific_num: number = 11;
let num_index: number = -1

for(let index:number = -1; index < array.length; index++){
    if(array[index] === specific_num){
        num_index = index;
        break
    }
}

if (num_index === -1) {
    console.log("Index not found!")
} else {
    console.log(`Index is ${num_index}`);
}