import inquirer from "inquirer";

const calculator = await inquirer.prompt([
    {
        type:"input",
        name:"firstNumber",
        message:"Enter First Number: ",
    },
    {
        type:"input",
        name:"secondNumber",
        message:"Enter Second Number: "
    },
    {
        type:"list",
        name:"Operation",
        message:"Select Operation",
        choices: ["+", "-", "x", "/", "^2"]
    }
]);

if(calculator.Operation === "+"){
    console.log(`${calculator.firstNumber} + ${calculator.secondNumber} = ${parseFloat(calculator.firstNumber) + parseFloat(calculator.secondNumber)}`);
}else if (calculator.Operation === "-"){
    console.log(`${calculator.firstNumber} - ${calculator.secondNumber} = ${parseFloat(calculator.firstNumber) - parseFloat(calculator.secondNumber)}`);
}else if(calculator.Operation === "*"){
    console.log(`${calculator.firstNumber} x ${calculator.secondNumber} = ${parseFloat(calculator.firstNumber) * parseFloat(calculator.secondNumber)}`);
} else if(calculator.Operation==="/"){
    if(parseInt(calculator.secondNumber)===0){
        console.log("Error! Division by zero is not allowed.");
    }else{
        console.log(`${calculator.firstNumber} / ${calculator.secondNumber} = ${parseFloat(calculator.firstNumber) / parseFloat(calculator.secondNumber)}`);
    }
}