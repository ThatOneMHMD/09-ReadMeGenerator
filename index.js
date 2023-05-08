// Included packages needed for this application (Inquirer was installed using npm in node js)
const inquirer = require('inquirer');
const fs = require('fs');

// Imported data needed for this application
const generateMarkdown = require('./utils/generateMarkdown')

// Since I have added questions about screenshot/images locations and other info that may require the user to use the copy/paste function, I added this note that clearly explains the methods of copying and pasting data into the terminal!
console.log('\nNOTE: To paste text into the terminal, use one of the following methods:\n\n- Use the keyboard shortcut "Ctrl+Shift+V" (or "Cmd+V" on macOS).\n- Press the middle mouse button (or scroll wheel) to paste the text.\n- Right-click and select "Paste" from the context menu.\n');

// The array of questions for user input
const questions = [  
{
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'liveURL',
    message: 'Please provide the LIVE URL. If you do not have it, type: none, if you do: type in the link:',
},
{
    type: 'input',
    name: 'motivation',
    message: 'What was the motivation behind creating the project?',
},
{
    type: 'input',
    name: 'purpose',
    message: 'What was the purpose for building this project and what use does it serve?',
},
{
    type: 'input',
    name: 'solvedProblem',
    message: 'What problem does the project solve?',
},
{
    type: 'input',
    name: 'screenshot',
    message: 'Do you intend to enter any screenshots? If no, type: none, if yes, type in the location of the screenshot (./location):',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
},
{
    type: 'input',
    name: 'usage',
    message: 'How is the project meant to be used? Provide clear instructions and examples for use.',
},
{
    type: 'input',
    name: 'collaborators',
    message: 'What is your GitHub username?',
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license:',
    choices: ["MIT", "Apache", "BSD", "GNU", "compliant", "none"],
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'features',
    message: 'Please explain the main features of this project!',
},
{
    type: 'input',
    name: 'tests',
    message: 'How can your project be tested?',
},
{
    type: 'input',
    name: 'ReadMeName',
    message: 'What would you like this ReadMe file to be called? (no spaces)',
},
];

// This function creates the README file (once provided with the parameters and properly executed!)
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created your ReadMe file!')
  );
};



// This function initializes app (runs inquirer) and runs the function that creates the README file, thus physically creating and saving the file after the user inputs their answers!
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const ReadMeContent = generateMarkdown(answers);
            writeToFile(`${answers.ReadMeName}.md`, ReadMeContent)
        });
};

// Function call to initialize app
init();
