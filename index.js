// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

inquirer
.prompt([
 
{
    type: "input",
    name: "email",
    message: "Your email address please.",
},
{
    type: "input",
    name: "username",
    message: "Your github username please.",
},  
{
    type: "input",
    name: "title",
    message: "Title of the project?",
},
{
    type: "input",
    name: "Description",
    message: "Description of the project",  
},
{
    type: "input",
    name: "Table",
    message: "Table of Contents", 
},
{
    type: "input",
    name: "Installation",
    message: "Installations needed?", 
},
{
    type: "input",
    name: "Usage",
    message: "How to use the project?", 
},
{
    type: "list",
    name: "License",
    message: "What license is used for this project?", 
    choices: ["BSA", "MIT","Boost", "IBM"],
},
{
    type: "input",
    name: "Contribution",
    message: "Who contributed to the project?", 
},
{
    type: "input",
    name: "Tests",
    message: "Is test part of the project?", 
},
{
    type: "input",
    name: "Questions",
    message: "How do I resolve a problem that might occur?", 
}
]);

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(filReName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


