# Professional README Generator

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This is the code files for the corresponsing command-line application that functions as a Professional README File Generator. Once run properly, the user will be presented with questions regarding the title of their README file, the LIVE URL, etc. Once answered, the user's input is then used to create the corresponding professional README file! Checkout NEWFILE.md and NEWFILE2.md for examples!

## Table of Contents

- [Demo Video](#demo-video)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)

## Demo Video

This video is approximately 5 mins long. Though it, two sample README files are created. The first one includes a screenshot section, a LIVE URL, etc., while the second does not. This is done to show that the file is generated professionally with or without those sections. Please note that his video has no audio.

Link: https://www.youtube.com/watch?v=fL_J5m0gWHw

## Features

- When the user is prompted for information about their application repository, then a high-quality, professional README.md is generated with the title of their project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- When they enter their project title, then this is displayed as the title of the README
- When the user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- When they choose a license for their application from a list of options, then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under. And if they choose "none", then no license is added!
- When they choose to add a screenshot of their app project, they enter the image's location into the command line, then they are presented with the corresponding screenshot section. If they enter "none", then no screenshot is added
- When they choose to add a LIVE URL, then they are presented with the corresponding section. If they enter "none", then no URL section is added!
- When they enter their GitHub username, then this is added to the section of the README entitled Questions, with a link to their GitHub profile
- When they enter their email address, then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
- When they are prompted to enter a name for the README file and they enter whichever name desired, then the file is created with that name 
- When they click on the links in the Table of Contents, then they are taken to the corresponding section of the README

## Installation

To generate your own professional README, "git clone" the repo down to your local so you have the Node project on your local. Run "npm install" in order to install the npm package dependencies as specified in the package.json: inquirer- for question propmts for inputs from the command line in terminal.

## Usage

To use the application, run "node index.js" in the command line. Please make sure you are in the right directory when doing so! After answering the questions, the README file will be swiftly generated and will be ready for you at the root of the repo!

## License

MIT

## Credits

ThatOneMHMD - The creator of this website!
(Link: https://github.com/ThatOneMHMD)

gachoi06 - The provider of the starter code!
(Link to their GitHub profile: https://github.com/gachoi06)

(Link to their repo: https://github.com/coding-boot-camp/potential-enigma.git)
