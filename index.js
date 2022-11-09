//Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');

//Create an array of questions for manager first
const Questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the name of the project manager?",
    },
    {
        type: 'input',
        name: 'manEmpId',
        message: "What is the manager's employee ID?"
    },
    {
        type: 'input',
        name: 'manEmail',
        message: "What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'manOffice',
        message: "What is the manager's office number?",
    },
    {
        type: 'list',
        name: 'mgrWhatNext',
        message: "What next? (use arrow keys to select)",
        choices: ['Enter engineer details:', 'Enter intern details:', 'Finish']
    },

    //Create an array of questions for engineers next
    {
        type: 'input',
        name: 'engName',
        message: "What is the name of the engineer?",
    },
    {
        type: 'input',
        name: 'engEmpId',
        message: "What is the engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'engEmail',
        message: "What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'engGitHub',
        message: "What is the engineer's GitHub username?",
    },
    {
        type: 'list',
        name: 'engWhatNext',
        message: "What next? (use arrow keys to select)",
        choices: ['Enter engineer details:', 'Enter intern details:', 'Finish']
    },


    //Create an array of questions for interns next

    {
        type: 'input',
        name: 'intName',
        message: "What is the name of the intern?",
    },
    {
        type: 'input',
        name: 'intId',
        message: "What is the intern's employee ID?"
    },
    {
        type: 'input',
        name: 'intEmail',
        message: "What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'intSchool',
        message: "What is the intern's school?",
    },
    {
        type: 'list',
        name: 'intWhatNext',
        message: "What next? (use arrow keys to select)",
        choices: ['Enter engineer details:', 'Enter intern details:', 'Finish']
    }
];

inquirer.prompt(Questions).then((answers) => {

    console.log(JSON.stringify(answers, null, '  '));

    // TODO: Create a function to write HTML file
    // const title = (answers.title);
    // const motivation = (answers.motivation);

    fs.writeFile('index.html',

        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <title>My Team</title>
        </head>
        
        <body>
        <header class = "jumbotron"><h1>My Team</h1></header>
<div class="card-deck"> 
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./assets/cardheader.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <p class="card-text">Here are details for contacting the manager.</p>
    <ul>
    <li>Name: ${answers.managerName}</li>
    <li>ID: ${answers.manEmpId}</li>
    <li>email: <a href="mailto:${answers.Email}">${answers.manEmail}</a></li>
    <li>Office: ${answers.manOffice}</li>
    </ul>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./assets/cardheader.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <p class="card-text">Here are details for contacting the engineer.</p>
    <ul>
    <li>Name: ${answers.engName}</li>
    <li>ID: ${answers.engEmpId}</li>
    <li>email: <a href="mailto:${answers.engEmail}">${answers.engEmail}</a></li>
    <li>GitHub: <a href="https://github.com/${answers.engGitHub}">${answers.engGitHub}</a></li>
    </ul>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./assets/cardheader.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <p class="card-text">Here are details for contacting the intern.</p>
    <ul>
    <li>Name: ${answers.intName}</li>
    <li>ID: ${answers.intId}</li>
    <li>email: <a href="mailto:${answers.intEmail}">${answers.intEmail}</a></li>
    <li>School: ${answers.intSchool}</li>
    </ul>
  </div>
</div>
</div>

        </body>
        
        </html>`,


        function (err) {
            if (err) throw err;
            console.log('Saved!');


        });
})