let names:string[] = ["Akbar Ali", "Kamran Hanif", "Mani", "Bilal"]
for(let i =0; i < names.length; i++){
    console.log(names[i]);
}

// Splices Method in Array
// 1 Mean Delete and 0 means place in that index
names.splice(2, 0, "Faizan", "Saad");
names.splice(2, 1, "Faizan", "Saad");
console.log(names)

// Slice
let slnames = names.slice(1);
console.log(slnames);