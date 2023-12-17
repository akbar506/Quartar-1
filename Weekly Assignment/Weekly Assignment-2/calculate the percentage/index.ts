function percentage(obtainedMarks:number, totalMarks:number){
    let percentage:number = (obtainedMarks/totalMarks) * 100;
    return `${percentage} %`

}

console.log(percentage(656, 1100));
export{}