function generateMD(answers) {
    // set url for license
    switch (answers.license) {
        case "MIT":
            answers.licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "Apache 2.0":
            answers.licenseBadge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GNU v3.0":
            answers.licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break;
    }

    return `
    # ${answers.title}
    ${answers.licenseBadge}
    
    ## Description
    ${answers.description}

    ### Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)

    ### Installation
    ${answers.installation}

    ### Usage
    ${answers.usage}
    
    ### Contributing
    ${answers.contributing}
    
    ### Tests
    ${answers.tests}
    
    ### License
    This project is licensed under ${answers.license}. 

    ### Questions
    
    If you have any questions, feel free to [email me](mailto:$(${answers.email})).
    
    *If you'd like to see more of my work, please check out [my github!](github.com/${answers.username})*
    `
}