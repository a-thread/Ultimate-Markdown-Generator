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
    
### Description
${answers.description}

---

#### Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Technologies Used](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

---

### Installation
${answers.installation}

### Usage
${answers.usage}

### Tests
${answers.tests}

### Technologies Used
${answers.tech}

### License
This project is licensed under ${answers.license}. 

### Contributing
${answers.contributing}

### Questions
    
If you have any questions, please [email me.](mailto:${answers.email})
If you'd like to see more of my work, feel free to check out [my github!](https://github.com/${answers.username})

*© ${year} ${answers.fullname}*
    `
}

module.exports = mdFunction; // exporting function