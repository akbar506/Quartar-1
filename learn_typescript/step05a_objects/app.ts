let studentName = {
    name: "Akbar Ali",
    age: 17
}

console.log(studentName);
console.log(studentName.name);
console.log(studentName["age"]);


// Type Declaration
let studentMark : {
    name: string,
    marks: number
}

studentMark = {
    name: "Ali",
    marks: 700
}

console.log(studentMark)
console.log(studentMark.name)
console.log(studentMark["marks"])