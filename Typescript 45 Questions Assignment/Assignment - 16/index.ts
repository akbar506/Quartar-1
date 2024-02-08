let invited_people:string[] = ["Mani", "Kamran", "Umer"];
invited_people.unshift("Faizan");
invited_people.splice(invited_people.length / 2, 0, "Bilal");
invited_people.push("Hashim");
for(let i:number = 0; i < invited_people.length; i++){
    console.log(`${invited_people[i]} you are invited to grand Hotal. Timing is 8 PM. Don't forget to come.`);
}
