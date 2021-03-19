// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license == "GNU")
    return`<img src="https://img.shields.io/badge/License-GPLv3-blue.svg"></img>`
    if(license == "MIT")
    return`<img src="https://img.shields.io/badge/License-MIT-yellow.svg"></img>`
    if(license == "Boost")
    return`<img src="https://img.shields.io/badge/License-Boost%201.0-lightblue.svg"></img>`
    if(license == "IBM")
    return`<img src="https://img.shields.io/badge/License-IPL%201.0-blue.svg"></img>`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if(license == "nothing")
//     return `* [License​](#license)`
//     else{
//         return;
//     }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }



module.exports = renderLicenseBadge;
