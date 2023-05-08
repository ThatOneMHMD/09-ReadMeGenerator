// This function returns a license badge based on which license is passed in (according to user input). If there is no license, it returns an empty string
function renderLicenseBadge(license) {

  if (license !== "none"){
    return `\n\n![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }

  return "";
}

// This function returns the license link for the table of content. If there is no license, it returns an empty string
function renderLicenseLink(license) {

  if (license !== "none") {
    return `\n- [License](#license)`;
  }
  return '';
}

// This function returns the actual "license section" of README. If there is no license, it returns an empty string
function renderLicenseSection(license) {

  if (license !== "none"){
    return `\n\n## License\n\nThis project is licensed under ${license}` 
  }
  return '';
}

// This function returns generates a "screenshot section" in the README file, where a screenshot of the app is provided. If there is no screenshot, it returns an empty string
function renderscreenshotSection(screenshot) {

  if (screenshot !== "none"){
    return `\n\n## Screenshot\n\n![App-Screenshot](${screenshot})` 
  }
  return '';
}

// This function returns generates a "Live URL section" in the README file, where a live URL of the app is provided. If there is no URL, it returns an empty string
function renderLiveURLSection(liveURL) {

  if (liveURL !== "none"){
    return `\n\n## Live URL\n\n${liveURL}` 
  }
  return '';
}

// This function generates markdown for README: This is where the user input is enterd as data into the README file!
function generateMarkdown(data) {

return `
# ${data.projectTitle}${renderLicenseBadge(data.license)}${renderLiveURLSection(data.liveURL)}

## Description

- ${data.motivation}
- ${data.purpose}
- ${data.solvedProblem}${renderscreenshotSection(data.screenshot)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tests](#tests)${renderLicenseLink(data.license)}
- [Questions](#questions)
- [How to Contribute](#how-to-contribute)

## Installation

${data.installation}

## Usage

${data.usage}

## Features

${data.features}

## Tests

${data.tests}${renderLicenseSection(data.license)}

## Questions

Please direct any questions and inquiries to the creator of this project, ${data.collaborators}:

- Access their GitHub profile by clicking on this link: https://github.com/${data.collaborators}
- And/or contact them via email: ${data.email}

## How to Contribute

If you'd like to contribute to this project, please follow [The Contributor Covenant](https://www.contributor-covenant.org/)!
`;};

// Export the generateMarkdown function so that it can later be imported and used in the index.js file!
module.exports = generateMarkdown;
