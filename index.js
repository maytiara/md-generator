// Install the co-dependencies [npm i inquirer@8.2.4]
// Objective: To create a README.md file for your github proj

const inquirer = require ('inquirer');


// Create a demo file or mock-up README.md file for your template
// Create Questions, based from the module 9 requirements
inquirer.prompt([ 
    {
        type: 'input',
        message: "What is the Project title?",
        name: 'title',
    },
    {
        type: 'list',
        message: "Please choose the license type",
        name: 'license',
        choices: [
            'CC BY 4.0', 'APACHE 2.0', 'MIT', 'MS PL', 'ISC', 'GPL 3.0', 'OSL 3.0', 'AGPL 3.0', 'LGPL 3.0', 'UNLICENSE', 
        ]
    },
    {
        type: 'input',
        message: "What are the steps required for this project?",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Provide link of your demo file",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Provide the list of your reference",
        name: 'reference',
    },
    {
        type: 'input',
        message: 'What is your github username',
        name: 'github',
    },
    {
        type: 'input',
        message: "Please provide your email address",
        name: 'email',
    },
    
]).then ((ans) => {
    console.log(ans);
})

// Project Title
// License
// Description 
// Table of Contents - Default
// Installation
// Usage
// Reference
// Github Link
// Feedback or contribute
// License

// After asked questions, to generate a README.md file to output folder
