// requiring inquirer, file system, and utilities
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// requiring questions array & markdown function
const generateMarkdown = require("./utils/markdown");
let mdQuestions = require("./utils/questions");

// capturing array in index file
let questionsArr = mdQuestions.questions;

const writeFileAsync = util.promisify(fs.appendFile);

function prompUser() {
    return inquirer.prompt(questionsArr);
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

        const README = generateMarkdown(answers);

        await writeToFile(`./new-markdown/README_${answers.username}.md`, README);

        console.log("Successfully generated Ultimate README! You will find it in the READMEs folder");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
