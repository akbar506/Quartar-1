var names = ["Akbar Ali", "Kamran Hanif", "Mani", "Bilal"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Splices Method in Array
names.splice(2, 1, "Faizan", "Saad");
console.log(names);
// Slice
var slnames = names.slice(1);
console.log(slnames);
