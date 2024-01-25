"use strict";
function palindrome_check(str) {
    let str_array = str.split("");
    console.log(str_array);
    let array_reverse = str_array.reverse();
    console.log(array_reverse);
    let final_str = array_reverse.join("");
    console.log(final_str);
    if (str.toLowerCase() === final_str.toLowerCase()) {
        return "Palindrome";
    }
    else {
        return "Not Palindrome";
    }
}
console.log(palindrome_check("Madam"));
