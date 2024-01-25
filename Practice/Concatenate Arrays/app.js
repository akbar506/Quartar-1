"use strict";
function concatw_array(arr1, arr2) {
    let arr_str1 = arr1.toString();
    let arr_str2 = arr2.toString();
    let concate_arr_str = arr_str1 + arr_str2;
    let concate_arr = concate_arr_str.split(" ");
    return concate_arr;
}
let arr1 = ["Ali ", "Kamran "];
let arr2 = ["Bilal ", "Mani "];
console.log(concatw_array(arr1, arr2));
