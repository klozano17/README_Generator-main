// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


//array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter project's title:",
        name: "title",
    },
    {
        type: "input",
        message: "Enter project's description here",
        name: "description",
    },
    {
        type: "input",
        message: "Enter the install instructions",
        name: "install",
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
    },
    {
        type: "list",
        choices: ['Apache', 'Boost', 'Eclipse', 'GPL', 'IBM', 'ISC', 'MIT', 'Mozilla', 'zLib', 'Unlicense'],
        message: "Choose a license for your project:",
        name: "license",
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution",
    },
    {
        type: "input",
        message: "Enter your github username:",
        name: "gitHub",
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "email",
    }
];

//function to write README file
function writeToFile(data) {
    const filename = "./dist/README.md";

    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " created!")
    });
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
