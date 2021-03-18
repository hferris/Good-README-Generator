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
    name: "description",
    message: "Description of the project",  
},
// {
//     type: "checkbox",
//     name: "table",
//     message: "Table of Contents", 
//     choices: [ 
//         "Installation",​ 
//         "Usage​", 
//         "License​", 
//         "Contributing​", 
//         "Tests​", 
//         "Questions",
//     ],
// },
{
    type: "input",
    name: "installation",
    message: "Installations needed?", 
},
{
    type: "input",
    name: "usage",
    message: "How to use the project?", 
},
{
    type: "list",
    name: "license",
    message: "What license is used for this project?", 
    choices: ["BSA", "MIT","Boost", "IBM"],
},
{
    type: "input",
    name: "contribution",
    message: "Who contributed to the project?", 
},
{
    type: "input",
    name: "tests",
    message: "Is test part of the project?", 
},
{
    type: "input",
    name: "questions",
    message: "If you have any questions about the repo, please contact me directly at", 
},
])

.then(function(data) {
    console.log(data);
    fs.writeFile("Hannasreadme.md", generateMarkdown(data), (err) => (err ? console.log (err) :
    console.log("Your ReadMe file is completed."))
);
});

function generateMarkdown(data) {
    return `# ${data.title}
    
## Description
${data.description}

## Table
${data.table}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
${data.questions} contact me at ${data.email} or fimd me at ${data.username}`;

};


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(filReName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


