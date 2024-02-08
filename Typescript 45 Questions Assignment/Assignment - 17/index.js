"use strict";
let invited_people = ["Mani", "Kamran", "Umer", "Faizan", "Hashim", "Bilal"];
console.log("Unforunately, Our dinner table won’t arrive in time for the dinner, and We have space for only two guests.\n");
while (invited_people.length > 2) {
    // let remove_guest: string[]  = invited_people.pop();
    let remove_guest = invited_people.pop();
    console.log(`${remove_guest} I am sorry to inform you that we can't invite you to dinner.\n`);
}
for (let i = 0; i < invited_people.length; i++) {
    console.log(`${invited_people[i]} you are still invited to grand Hotal. Timing is 8 PM. Don't forget to come.`);
}
