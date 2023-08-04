//data for license information
const licenseInfo = {
  name: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simlified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense', 'No License'],
  badge: ["[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)", "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)", "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)", "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", ''],
  licenseURL: ['https://opensource.org/licenses/Apache-2.0', 'https://www.gnu.org/licenses/gpl-3.0', 'https://opensource.org/licenses/MIT', 'https://opensource.org/licenses/BSD-2-Clause', 'https://opensource.org/licenses/BSD-3-Clause', 'https://www.boost.org/LICENSE_1_0.txt', 'http://creativecommons.org/publicdomain/zero/1.0/', 'https://opensource.org/licenses/EPL-1.0', 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html', 'https://www.gnu.org/licenses/lgpl-3.0', 'https://opensource.org/licenses/MPL-2.0', 'http://unlicense.org/', '' ]
}

// Return License Badge
function renderLicenseBadge(license) {
  license = license;
  for (var i = 0; i < licenseInfo.name.length; i++) {
    if (license === licenseInfo.name[i]) {
      return licenseInfo.badge[i];
    }
}
}

// Returns the license link
function renderLicenseLink(license) {
  license = license;
  for (var i = 0; i < licenseInfo.name.length; i++) {
    if (license === licenseInfo.name[i]) {
      return licenseInfo.licenseURL[i];
    }
}
}

//Return License Section
function renderLicenseSection(license) {
  license = license;
  for (var i = 0; i < licenseInfo.name.length; i++) {
    if (license === "No License") {
      return("This software is not covered under any license.")
    }else if (license === licenseInfo.name[i]) {
      return (`This software is covered under the ${licenseInfo.name[i]}.`);
    }
    }
  }


// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribute](#contribute)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ${renderLicenseLink(data.license)}
  
  ## How to Contribute
  ${data.contribute}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Github: https://github.com/${data.github}
  
  email: You may contact me at ${data.email} if you have additional questions.
`;
}


module.exports = generateMarkdown;
