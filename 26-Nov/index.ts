// let num:number = 10;

// if (num%2 == 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd")
// }

// If-else
let alpha:string = "e";

if (alpha == "a"){
    console.log("Vowels");
}
else if (alpha == "e"){
    console.log("Vowels");
}
else if (alpha == "i" ){
    console.log("Vowels");
}
else if (alpha == "o"){
    console.log("Vowels");
}
else if (alpha == "u"){
    console.log("Vowels");
}
else{
    console.log("Constraints");
}

// Nested If-else
let age:number = 18;
let country = "pakistan";
if(age>=18){
    if(country === "pakistan"){
        console.log("You are Eligible");
    }
    else{
        console.log("You are not Eligible");
    }
}else{
    console.log("You are under 18, so you cannot apply");
}

// Function
function sum(n1: number, n2:number){
    let sum:number = n1 + n2;
    return sum;
}

console.log(sum(2000, 2000))
// 2022 PTD