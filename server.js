// requiring inquirer, fs, util & moment
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// requiring questions array & markdown function
const generateMD = require("./assets/js/markdown");
let { questionsArr } = require("./assets/js/questions");

// writing the file asynchronously and appending it
const writeFileAsync = util.promisify(fs.appendFile);

// function prompting user to answer questions in array
function promptUser() {
    return inquirer.prompt(questionsArr);
}

// function to write README
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// function to initialize asynchronously
async function init() {
    // welcoming user
    console.log(`            `);
    console.log(` -----------------------------------------------`);
    console.log(` ===============================================`);
    console.log(`            `);
    console.log(`    Welcome to the ULTIMATE Markdown Generator`);
    console.log(`            `);
    console.log(` ===============================================`);
    console.log(` Follow the prompts to create your own markdown!`);
    console.log(` -----------------------------------------------`);
    console.log(`            `);
    try {
        // calling prompUser function & capturing answers
        const answers = await promptUser();

        // calling generateMarkdown to make README with answers
        const README = generateMD(answers);

        // capturing project title for file name and generating unique file name
        var mdTitle = (answers.title).replace(/\s+/g, '-').toLowerCase();

        // wait til the prompts are finished before writing file
        await writeToFile(`./output/${mdTitle}.md`, README);

        // letting user know the file has been successfully written
        console.log("Successfully generated your Ultimate README! You will find it in the output folder");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
