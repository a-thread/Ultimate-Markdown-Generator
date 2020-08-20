// requiring the following modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdown = require("./utils/markdown")

const writeFileAsync = util.promisify(fs.writeFile);

// Questions to propogate markdown
const questions = [
    { // user full name
        type: "input",
        name: "full-name",
        messgage: "What is your first and last name?"
    },
    { // username
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    { // email
        type: "input",
        name: "title",
        message: "Your email address?"
    },
    { // project title
        type: "input",
        name: "title",
        message: "The title of your project?"
    },
    { // project description
        type: "input",
        name: "description",
        message: "Provide a short description."
    },
    { // installation instructions
        type: "input",
        name: "installation",
        message: "What commands will the user use to install it?"
    },
    { // project usage
        type: "input",
        name: "usage",
        message: "Any usage information?"
    },
    { // contribution guidelines
        type: "input",
        name: "Contributing",
        message: "Any contribution guidelines?"
    },
    { // project license
        type: "list",
        name: "license",
        message: "Which license would you prefer?",
        choices: [
            'MIT',
            'Apache 2.0',
            'GNU v3.0'
        ]
    },
    { // tests for application
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
async function init() {
    console.log("Hi there! Welcome to Aiden's Ultimate README Generator. Please follow the prompts to make your own ultimate README.")
    try {
        const answers = await prompUser();

        const README = markdown.push(answers);

        await writeToFile("./markdown/README.md", README);

        console.log("Successfully generated Ultimate README! You will find it in the READMEs folder");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
