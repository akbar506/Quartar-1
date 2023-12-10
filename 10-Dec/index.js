"use strict";
let names = ["Akbar Ali", "Kamran Hanif", "Mani", "Bilal"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Splices Method in Array
names.splice(2, 0, "Faizan", "Saad");
console.log(names);
// Slice
let slnames = names.slice(1);
console.log(slnames);
