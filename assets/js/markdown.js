// using moment to get current date
const moment = require('moment');
const year = moment().format('yyyy'); // using year to generate copyright
const chooseLicense = require('./badges'); // using license.js to get badge url

// function to generate markdown
function mdFunction(answers) {
    chooseLicense(answers)
    return `
# ${answers.title} 
${answers.badge}

[${answers.title}](${answers.link})

[${answers.alt}](${answers.src})
    
## Description
${answers.description}

---

#### Table of Contents
- [Description](#description)
- [User Story](#user)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Demo](#demo)
- [Technologies Used](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

---

### User Story
${answers.story}

### Installation
${answers.installation}

### Usage
${answers.usage}

### Tests
${answers.tests}

### Demo 
*Demo to come!*

### Technologies Used
- ${answers.tech}

### Contributing
${answers.contributing}

#### License
This project is licensed under ${answers.license}. 

#### Questions
    
If you have any questions, please [email me.](mailto:${answers.email})

If you'd like to see more of my work, feel free to check out [my github!](https://github.com/${answers.username})

*© ${year} ${answers.fullname}*
    `
}

module.exports = mdFunction; // exporting function