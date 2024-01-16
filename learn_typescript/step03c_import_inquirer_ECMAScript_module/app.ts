import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type:"input",
        name:"Name",
        message:"Enter your Name: ",
    },
    {
        type:"input",
        name:"Age",
        message:"Enter your Age: "
    },
    {
        type:"list",
        name:"Gender",
        message:"Your Gender: ",
        choices: ["Male", "Female", "Other"]
    }
]);

console.log(`You Entered\nName: ${answer.Name}\nAge: ${answer.Age}\nGender: ${answer.Gender}`);