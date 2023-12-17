"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function percentage(obtainedMarks, totalMarks) {
    let percentage = (obtainedMarks / totalMarks) * 100;
    return `${percentage} %`;
}
console.log(percentage(656, 1100));
