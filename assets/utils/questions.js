// Questions to propogate markdown
exports.questions = [
    { // user full name
        type: "input",
        name: "fullname",
        message: "What is your full name?",
        default: "Firstname Lastname"
    },
    { // username
        type: "input",
        name: "username",
        message: "Your github username?",
        default: "user-name"
    },
    { // email
        type: "input",
        name: "email",
        message: "Your email address?",
        default: "email@address.com"
    },
    { // project title
        type: "input",
        name: "title",
        message: "The title of your project?",
        default: "Project Title"
    },
    { // project description
        type: "input",
        name: "description",
        message: "Provide a short description.",
        default: "Here is where my description will go."
    },
    { // installation instructions
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        default: "Install steps with ``` some code ``` goes here."
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