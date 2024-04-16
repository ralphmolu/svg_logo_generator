// dependencies
const inquirer = require('inquirer');
const fs = require('fs')

//prompt questions
inquirer.prompt([
    {},{},{}
])
.then((response) => {
    // destructure response object
    const { } = response;

    //creating the logo.svg
    fs.writeFile('logo.svg', , (error) => {
        error ? console.log('Error creating the logo') : console.log('logo.svg successfully created!')
    })
})