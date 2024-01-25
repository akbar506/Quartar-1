function PositiveElementCheck(array:number[]){
    let positive_element:boolean = array.every((num:number) => num>0);
    return positive_element;
}

let sample_array: number[] = [1,2,3,4,5,6,7,8,9,10];
console.log(PositiveElementCheck(sample_array));