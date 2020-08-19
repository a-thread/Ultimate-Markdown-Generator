// requiring the following modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "full-name",
        messgage: "What is your first and last name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "title",
        message: "Your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "The title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description."
    },
    {
        type: "input",
        name: "installation",
        message: "What commands will the user use to install it?"
    },
    {
        type: "input",
        name: "usage",
        message: "Any usage information?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Any contribution guidelines?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you prefer?",
        choices: [
            'MIT',
            'Apache 2.0',
            'GNU v3.0'
        ]
    },
    {
        type: "input",
        name: "tests",
        message: "What commands will the user use to test your application?"
    }
];

function prompUser() {
    return inquirer.prompt(questions);
}


// function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// function to initialize program
// async function init() = {
//     try {
//         const answers = await prompUser();

//         const README = generateMarkdown(answers);
//     }


// }

// function call to initialize program
init();
