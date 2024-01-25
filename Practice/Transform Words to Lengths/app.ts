function arrayLength(array:string[]){
    let length_of_array: number[] = array.map((value) => {
        return value.length;
    });
    return length_of_array;
}

let array:string[] = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(arrayLength(array));
