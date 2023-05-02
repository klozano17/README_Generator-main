//function that returns a license badge based on which licnese is passed in
function renderLicenseBadge(response) {
  ["MIT", "BSD 3-Clause", "BSD 2-Clause", "GPL", "Apache 2.0", "LGPL", "MPL 2.0", "CDDL", "EPL"]
  let badge = "";
  switch (response) {
    case "MIT":
      badge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
      break;
    case "BSD 3-Clause":
      badge = `https://img.shields.io/badge/License-BSD%203--Clause-orange.svg`;
      break;
    case "BSD 2-Clause":
      badge = `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`;
      break;
    case "GPL":
      badge = `https://img.shields.io/badge/License-LGPL%20v3-blue.svg`;
      break;
      case "Apache 2.0":
        badge = `https://img.shields.io/badge/License-Apache%202.0-green.svg`;
        break;
    case "LGPL":
      badge = `https://img.shields.io/badge/License-LGPL%20v3-blue.svg`;
      break;
    case "MPL 2.0":
      badge = `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
      break;
    case "CDDL":
      badge = `https://img.shields.io/badge/License-CDDL%201.0-lightblue.svg`;
      break;
    case "EPL":
      badge = `https://img.shields.io/badge/License-EPL%201.0-red.svg`;
      break;
    default:
      badge = "";
  }

  return badge;
}
  
  
  //function that returns the license link
function renderLicenseLink(license) {
  let licenseLink;

 // select correct license link for the selected license
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}


//function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "") {
    let licenseSection = "";
    return licenseSection;
  } else {
    let licenseSection = `![License](${renderLicenseBadge(license)})\n 
  For more information about this license - <${renderLicenseLink(license)}>`
    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

  ## License
  ${renderLicenseSection(answer.license)}


  ## Description
  ${answer.description}

  ## Table of Contents

  - [Install](#install)
  - [Usage](#usage)
  - [Test](#test)
  - [Contribution](#contribution)
  - [License](#license)

  ## Usage

  To use this project - ${answer.usage}

  ## Install

  To install this project - ${answer.install}

  ## Test
  ${answer.test}

  ## Contribution
  ${answer.contribution}

  ## License
  ${answer.license}

  GitHub - https://github.com/${answer.github} 
  Email address - ${answer.email}
  For any questions regarding this project, contact me.

`;
}

module.exports = generateMarkdown;
