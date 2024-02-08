"use strict";
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Dynamo', 'Derren Brown', 'Lance Burton'];
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let greatMagicians = make_great([...magicians]);
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicians);
