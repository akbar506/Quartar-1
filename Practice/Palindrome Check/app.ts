function palindrome_check(str:string){
    let str_array:string[] = str.split("");
    console.log(str_array);
    let array_reverse: string[] = str_array.reverse();
    console.log(array_reverse);
    let final_str:string = array_reverse.join("");
    console.log(final_str);

    if (str.toLowerCase() === final_str.toLowerCase()) {
        return "Palindrome"
    } else {
        return "Not Palindrome"
    }
}

console.log(palindrome_check("Madam"));