//create function to replace the symbol space in appropriate encode component
function licensedBadge (license) {

    const licenseSymbols = encodeURIComponent (license.replace ('-', ' '))

    return `
![${license}-license](https://img.shields.io/badge/license-${licenseSymbols}-yellowgreen)`;
}

//list of data required for the generator
function generateMarkdown ({ 
    title,
    license,
    description,
    installation,
    usage,
    reference,
    github,
    email
}) {

    // print the data/s on this string (template literal) **Dont use tab indentation inside the string
   return `

# ${title}

${licensedBadge(license)}

## Description
---------------------
${description}

## Table of Contents
1. [Installation](#installation-details)
2. [Usage](#screenshots-demo-video)
3. [Reference](#reference-and-credits)
4. [Github Link](#github-username)
5. [Feedback or Contribute](#ask-question-or-how-to-contribute)
6. [License](#license-type)

## Installation
---------------------
Step 1: ${installation}
Step 2: ${installation}
Step 3: ${installation}

## Usage
---------------------
Here's the link ${usage}

## Reference
---------------------
Here are the list of reference for this project, [Reference 1](${reference}),

## Github Link
---------------------
You might be a shooting star &#9733; Don't forget to click the ![star-button](utils/star-btn.png) button on any of my repositories [github/${github}](https://github.com/${github})

## Feedback or Contribute
---------------------
***If you have any feedback or suggestion feel free to send an email,*** ${email}
***Or else, if you would like to make a contribution, feel free to*** ![buy-me-a-coffee](utils/buy-me-a-coffee_opt.png) 

## License
---------------------
All rights reserved. Under the ${license} license.


` 

}

module.exports = generateMarkdown; // this export the function generateMarkdown