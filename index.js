// dependencies
const inquirer = require('inquirer');
const fs = require('fs')

//prompt questions
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: [Circle, Triangle, Square],
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text Color (keyword or hex):'
    },
    {
        type
    }
])
.then((response) => {
    // destructure response object
    const { } = response;

    //creating the logo.svg
    fs.writeFile('logo.svg', 'Image content', (error) => {
        error ? console.log('Error creating the logo') : console.log('logo.svg successfully created!')
    })
})