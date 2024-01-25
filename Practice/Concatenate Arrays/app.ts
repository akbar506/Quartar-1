function concatw_array(arr1:string[], arr2:string[]){
    let arr_str1:string = arr1.toString();
    let arr_str2:string = arr2.toString();
    
    let concate_arr_str:string = arr_str1 + arr_str2;
    
    let concate_arr: string[] = concate_arr_str.split(",");
    return concate_arr;
}

let arr1:string[] = ["Ali ", "Kamran "];
let arr2:string[] = ["Bilal ", "Mani "];

console.log(concatw_array(arr1, arr2));