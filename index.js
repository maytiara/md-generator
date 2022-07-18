// Install the co-dependencies [npm i inquirer@8.2.4]
// Objective: To create a README.md file for your github proj

const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/md-generator');


// Create a demo file or mock-up README.md file for your template
// Create Questions, based from the module 9 requirements

// Table of Contents - Default ---

inquirer.prompt([ 
    {
        type: 'input',
        message: "What is the Project title?",
        name: 'title', // Project Title
    },
    {
        type: 'list',
        message: "Please choose the license type",
        name: 'license', // License
        choices: [
            'CC BY 4.0', 'APACHE 2.0', 'MIT', 'MS PL', 'ISC', 'GPL 3.0', 'OSL 3.0', 'AGPL 3.0', 'LGPL 3.0', 'UNLICENSE', 
        ]
    },
    {
        type: 'input',
        message: "Describe the ojective of this project",
        name: 'description', // Description 
    },
    {
        type: 'input',
        message: "What are the steps required for this project?",
        name: 'installation', // Installation
    },
    {
        type: 'input',
        message: "Provide link of your demo file",
        name: 'usage', // Usage
    },
    {
        type: 'input',
        message: "Provide the link of your reference",
        name: 'reference', // Reference
    },
    {
        type: 'input',
        message: 'What is your github username',
        name: 'github', // Github Link
    },
    {
        type: 'input',
        message: "Please provide your email address",
        name: 'email', // Feedback or contribute
    },

]).then ((ans) => {
    console.log(ans); // asked in the node environment

    const generated = generateMarkdown (ans); // return list of data inserted in function generateMarkdown

    console.log(generated);
})



// After asked questions, to generate a README.md file to output folder
