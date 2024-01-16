// npm i inquirer
// npm i --save-dev @types/inquirer
// npm install chalk

import inquirer from "inquirer";
import chalk from "chalk";

let name = await inquirer.prompt([
    {
        type:"input",
        name:"Name",
        message:"Enter your Name:"
    }
]);

console.log(`Your name is ${chalk.blue(`${name.Name}`)}`);