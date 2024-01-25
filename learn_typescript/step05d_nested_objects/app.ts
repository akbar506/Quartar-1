type Student = {
    name:string,
    age:number,
    class:number
};

type Collage = {
    name:string,
    NoOfStudent:number,
    studentDATA:Student
};

let School:Collage = {
    name: "Cathedral School",
    NoOfStudent: 2500,
    studentDATA: {
        name:"Akbar Ali",
        age:18,
        class: 12
    }
};

console.log(School);
console.log(School.name);
console.log(School.NoOfStudent);
console.log(School["studentDATA"]);
console.log(School["studentDATA"]["name"]);
console.log(School["studentDATA"]["age"]);
console.log(School["studentDATA"]["class"]);