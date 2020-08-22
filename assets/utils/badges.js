function chooseLicense(answers) {
    switch (answers.license) {
        case "MIT":
            answers.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)"
            break;
        case "Apache 2.0":
            answers.badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)"
            break;
        case "GPL v3.0":
            answers.badge = "[![License: GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)"
            break;
    }
}

module.exports = chooseLicense; // exporting function