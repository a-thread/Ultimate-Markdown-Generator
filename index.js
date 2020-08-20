// requiring the following modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/markdown")
const mdQuestions = require("./utils/questions")

const writeFileAsync = util.promisify(fs.writeFile);

function prompUser() {
    return inquirer.prompt(mdQuestions);
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

        await writeToFile("./new-markdown/README.md", README);

        console.log("Successfully generated Ultimate README! You will find it in the READMEs folder");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
