// Implicit case
let firstname = "Akbar";
let lastname = "Ali";
console.log("My name is", firstname, lastname);

//// Explicit case
let firstName: string = "Akbar";
let lastName: string = "Ali";
console.log("My name is", firstName, lastName);


//// Code without using template literals
console.log("My first Name " + firstName + "and my last name is " + lastName);
//// Templates Literals
console.log(`My First Name is ${firstName} and last name is ${lastName}\n`);

//// Data Types
let strings_dt: string = "Ali";
let num_dt: number = 2006;
let bool_dt: boolean = true;
let null_dt: null = null;
let undefined_dt: undefined;
console.log(`Type of ${strings_dt} is ${typeof strings_dt}`);
console.log(`Type of ${num_dt} is ${typeof num_dt}`);
console.log(`Type of ${bool_dt} is ${typeof bool_dt}`);
console.log(`Type of ${null_dt} is ${typeof null_dt}`);
console.log(`Type of ${undefined_dt} is ${typeof undefined_dt}\n`);

///// Operator in TypeScript
// Arithmetic
let n1: number = 20;
let n2: number = 15;
// Adding two numbers
console.log(`20 + 15 = ${n1 + n2}`);
// Substracting two numbers
console.log(`20 - 15 = ${n1 - n2}`);
// Multiplying two numbers
console.log(`20 x 15 = ${n1 * n2}`);
// Dividing two numbers
console.log(`20 / 15 = ${n1 / n2}`);
// Modulus two numbers
console.log(`20 % 15 = ${n1 % n2}\n`);


// Comparison Operators
let comp_num = 10;
console.log(`${comp_num} is equal to ${comp_num} which is ${comp_num == 10}`);
console.log(`${comp_num} is triple equal to ${comp_num} which is ${comp_num === 10}`);
console.log(`${comp_num} is not equal to ${comp_num} which is ${comp_num != 10}`);
console.log(`${comp_num} is greater than or equal to ${comp_num} which is ${comp_num >= 10}`);
console.log(`${comp_num} is lower than and equal to ${comp_num} which is ${comp_num <= 10}`);
console.log(`${comp_num} is greater than to ${comp_num} which is ${comp_num < 10}`);
console.log(`${comp_num} is lower than to ${comp_num} which is ${comp_num > 10}\n`);

//// Logical Operators
