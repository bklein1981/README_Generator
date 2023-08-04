//Included Packages
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require("inquirer");


// Questions for user input
const questions = [
    //Title
    "What is the title of your project or application?",
    //Description
    "Provide a short description explaining the what, why, and how of your project or application.",
    //Installation
    "What are the steps required to install your project or application?",
    //Usage
    "Provide instructions and examples for using your project or application.",
    //License
    "Are you using a license, and if so, which license?",
    //Contribute
    "If you would like other developers to contribute, what guidelines do you have for doing so?",
    //Tests
    "What tests do you have for your project or application, and how do you run those tests?",
    //Questions
    "What is your github username?",
    "What is your email address?"
];




// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simlified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'No License']
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[6],
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            }
        ])
        .then((answers) => {
            const readMeContent = generateMarkdown(answers);
            writeToFile(readMeContent);
        });

    // Write README file
    function writeToFile(content) {
        fs.writeFile('README1.md', content, (err) =>
            err ? console.log(err) : console.log('Successfully wrote README.md')
        );
    }
}

// Function call to initialize app
init.apply(this, questions);
