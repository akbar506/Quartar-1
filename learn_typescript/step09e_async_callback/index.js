"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData(callback) {
    setTimeout(() => {
        const data = "Muhammad Akbar Ali";
        callback(data);
    }, 5000);
}
;
function GetData(data) {
    console.log(`User name is ${data}`);
}
;
fetchData(GetData);
console.log("Getting Data...");
// function
function greet(name, callback) {
    console.log("Hi" + " " + name);
    callback();
}
// callback function
function callMe() {
    console.log("I am callback function");
}
// passing function as an argument
greet("Peter", callMe);
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
function GetName(callbackagain) {
    setTimeout(() => {
        const firstName = "Akbar Ali";
        callbackagain(firstName);
    }, 3000);
}
function printName(firstName) {
    console.log(`My name is ${firstName}`);
}
GetName(printName);
