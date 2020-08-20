// Questions to propogate markdown
exports.questions = [
    { // user full name
        type: "input",
        name: "fullname",
        message: "What is your first and last name?"
    },
    { // username
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    { // email
        type: "input",
        name: "email",
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