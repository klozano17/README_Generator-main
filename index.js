// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
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
        choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'zLib', 'Unlicense'],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
