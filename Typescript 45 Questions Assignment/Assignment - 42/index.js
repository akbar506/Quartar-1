"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
    return magicians;
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Dynamo', 'Derren Brown', 'Lance Burton'];
magicians = make_great(magicians);
show_magicians(magicians);
