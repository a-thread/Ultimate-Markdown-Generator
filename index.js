// requiring inquirer, file system, and utilities
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// requiring questions array & markdown function
const generateMarkdown = require("./utils/markdown");
let mdQuestions = require("./utils/questions");

// capturing array in index file
let questionsArr = mdQuestions.questions;

// writing the file asynchronously and appending it
const writeFileAsync = util.promisify(fs.appendFile);

// function prompting user to answer questions in array
function prompUser() {
    return inquirer.prompt(questionsArr);
}

// function to write README
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// function to initialize asynchronously
async function init() {
    // welcoming user
    console.log("Hi there! Welcome to Aiden's Ultimate README Generator. Please follow the prompts to make your own ultimate README.")
    try {
        // calling prompUser function & capturing answers
        const answers = await prompUser();

        // calling generateMarkdown to make README with answers
        const README = generateMarkdown(answers);

        // capturing project title for file name and generating unique file name
        var mdTitle = (answers.title).replace(/\s+/g, '-').toLowerCase();

        // wait til the prompts are finished before writing file
        await writeToFile(`./new-markdown/README_${mdTitle}.md`, README);

        // letting user know the file has been successfully written
        console.log("Successfully generated Ultimate README! You will find it in the new-markdown folder");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
