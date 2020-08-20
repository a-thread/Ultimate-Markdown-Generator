const moment = require('moment');
const year = moment().format('yyyy');

function mdFunction(answers) {
    // setting url for licenses
    switch (answers.license) {
        case "MIT":
            answers.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "Apache 2.0":
            answers.badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GPL v3.0":
            answers.badge = "[![License: GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break;
    }

    return `
# ${answers.title}
${answers.badge}
    
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
''''
${answers.installation}
''''

### Usage
${answers.usage}
    
### Contributing
${answers.contributing}
    
### Tests
${answers.tests}
    
### License
This project is licensed under ${answers.license}. 

### Questions
    
If you have any questions, please [email me.](mailto:$(${answers.email})).
    
*If you'd like to see more of my work, feel free to check out [my github!](github.com/${answers.username})*
**©${year} ${answers.fullname}**
    `
}

module.exports = mdFunction;