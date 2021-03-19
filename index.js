// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const renderLicenseBadge = require("./utils/generateMarkdown");


inquirer
.prompt([

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
{
    type: "checkbox",
    name: "table",
    message: "Table of Contents", 
    choices: ["Installation", "Usage​", "License​", "Contribution", "Tests", "Demo", "Questions"],
},
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
    choices: ["GNU", "MIT","Boost", "IBM"],
},
{
    type: "input",
    name: "contribution",
    message: "How to contribute to the project?", 
},
{
    type: "input",
    name: "tests",
    message: "Is test part of the project?", 
},
{
    type: "input",
    name: "demo",
    message: "Demonstration of project?", 
},
{
    type: "input",
    name: "questions",
    message: "If you have any questions about the repo, please contact me directly at", 
},
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
])

.then(function(data) {
    console.log(data);
    fs.writeFile("Hannasreadme.md", generateMarkdown(data), (err) => (err ? console.log (err) :
    console.log("Your ReadMe file is completed."))
);
});

function generateMarkdown(data) {
    return `# ${data.title}
    
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Content

* [Installation](#installation) 

* [Usage​](#usage)

* [License​](#license)

* [Contributing​](#contribution)

* [Tests​](#tests)

* [Demo](#demo)

* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contribution
${data.contribution}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Demo
${data.demo}

## Questions
${data.questions} If you have any questions about the repo, please contact me directly at ${data.email} or find me on github at ${data.username}`;

};


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(filReName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


