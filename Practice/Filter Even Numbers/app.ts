function even_array(arr:number[]){
    let even_array: number[] = arr.filter((x:number) => x % 2 == 0);
    return even_array;
}

let array:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(even_array(array));