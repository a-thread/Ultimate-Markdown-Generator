// Questions to propogate markdown
const questionsArr = [
    { // user full name
        type: "input",
        name: "fullname",
        message: "What is your full name?",
        default: "Aiden Threadgoode"
    },
    { // username
        type: "input",
        name: "username",
        message: "Your github username?",
        default: "a-thread"
    },
    { // email
        type: "input",
        name: "email",
        message: "Your email address?",
        default: "aiden.threadgoode@gmail.com"
    },
    { // project title
        type: "input",
        name: "title",
        message: "The title of your project?",
        default: "Project Title"
    },
    { // link to deployed project
        type: "input",
        name: "link",
        message: "If your project is deployed, please provide a link here.",
        default: "link to come!"
    },
    { // image source
        type: "input",
        name: "src",
        message: "Please type the path to your demo image, excluding quotes.",
        default: "./assets/images/demo.png"
    },
    { // image source
        type: "input",
        name: "alt",
        message: "Please provide an alt description of the image."
    },
    { // project description
        type: "input",
        name: "description",
        message: "Provide a short description.",
        default: "Here is where my description will go."
    },
    { // user story
        type: "input",
        name: "story",
        message: "Provide a user story here!",
        default: "AS A USER..."
    },
    { // installation instructions
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        default: "Install steps with ``` code ``` go here."
    },
    { // project usage
        type: "input",
        name: "usage",
        message: "Provide instructions for use.",
        default: "Here are your instructions for use."
    },
    { // tests for application
        type: "input",
        name: "tests",
        message: "What commands will the user use to test your application?",
        default: "N/A"
    },
    { // technologies used
        type: "input",
        name: "tech",
        message: "Which technologies did you use?",
        default: "Technologies to be filled in later."
    },
    { // contribution guidelines
        type: "input",
        name: "contributing",
        message: "Describe any contribution guidelines.",
        default: "If you'd like to contribute to this application, feel free to submit a pull request."
    },
    { // project license
        type: "list",
        name: "license",
        message: "Which license would you prefer?",
        choices: [
            'MIT',
            'Apache 2.0',
            'GPL v3.0'
        ]   
    }
];

exports.questionsArr = questionsArr;