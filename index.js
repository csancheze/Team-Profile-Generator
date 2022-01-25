const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require('fs');
const generateHtml = require('./src/generateHtml');

const listEmployees = []

const startApp = () => {
console.log('\x1b[32m%s\x1b[0m','Welcome! Thank you for using this app. Please fill the information to create a team profile.')
inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the manager name:",
            validate(answer) { if(!answer) {
                return "Please, write a name!"
            }
            return true
            }
        },
        {
            name: "id",
            type: "input",
            message: "Enter the manager id:",
            validate(answer) { 
                valid = /^[0-9]+$/.test(answer)
                if(!valid) {
                return "Please, write a number!"
            }
            return true
            }
        },
        {
            name: "email",
            type: "input",
            message: "Enter the manager email:",
            validate (answer) { 
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                if (!valid) {
                return "Please, write a valid email!"
            }
            return true
            }
        },
        {
            name: "officeNo",
            type: "input",
            message: "Enter the manager office number:",
            validate(answer) { 
                valid = /^[0-9]+$/.test(answer)
                if(!valid) {
                return "Please, write a number!"
            }
            return true
            }
        }

    ])
    .then((answers) => {
        const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNo)
        listEmployees.push(manager)
        console.log(listEmployees)
        employeeMenu();
    })
}

const employeeMenu = () => {
inquirer
    .prompt([
        {
            name: "menu",
            type: "list",
            message: "What type of employee do you want to add, or are you done?",

            choices: ["Engineer","Intern","Finish"]
        }
            
    ])
    .then((answer) =>{
        if (answer.menu == "Engineer") {
            addEngineer();
            
        } else if (answer.menu == "Intern") {
            addIntern();

        } else if (answer.menu == "Finish") {
            renderTeam();
        }else {
            return
        }
    })
}

const addEngineer = () => {

    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "Enter the Engineer name:",
                validate(answer) { if(!answer) {
                    return "Please, write a name!"
                }
                return true
                }
            },
            {
                name: "id",
                type: "input",
                message: "Enter the Engineer id:",
                validate(answer) { 
                    valid = /^[0-9]+$/.test(answer)
                    if(!valid) {
                    return "Please, write a number!"
                }
                return true
                }
            },
            {
                name: "email",
                type: "input",
                message: "Enter the Engineer email:",
                validate (answer) { 
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                    if (!valid) {
                    return "Please, write a valid email!"
                }
                return true
                }
            },
            {
                name: "github",
                type: "input",
                message: "Enter the Engineer Github username:",
                validate(answer) { if(!answer) {
                    return "Please, write a name!"
                }
                return true
                }
            }
    
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
            listEmployees.push(engineer)
            console.log(listEmployees)
            employeeMenu();
        })
    }

const addIntern = () => {

    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "Enter the Intern name:",
                validate(answer) { if(!answer) {
                    return "Please, write a name!"
                }
                return true
                }
            },
            {
                name: "id",
                type: "input",
                message: "Enter the Intern id:",
                validate(answer) { 
                    valid = /^[0-9]+$/.test(answer)
                    if(!valid) {
                    return "Please, write a number!"
                }
                return true
                }
            },
            {
                name: "email",
                type: "input",
                message: "Enter the Intern email:",
                validate (answer) { 
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                    if (!valid) {
                    return "Please, write a valid email!"
                }
                return true
                }
            },
            {
                name: "school",
                type: "input",
                message: "Enter the Intern School name:",
                validate(answer) { if(!answer) {
                    return "Please, write a name!"
                }
                return true
                }
            }
    
        ])
        .then((answers) => {
            const intern = new Intern(answers.name,answers.id,answers.email,answers.school)
            listEmployees.push(intern)
            console.log(listEmployees)
            employeeMenu();
        })
    }

const renderTeam = () => {
    let cards = ""
    let employeeIcon = ""
    let employeeExtra = ""
    for (let employee of listEmployees) {
        switch (employee.role) {
            case "Manager":
                employeeIcon = "&#128081";
                employeeExtra = `<p class="card-text"> Office number: ${employee.officeNumber} <p>`
                break;
            case "Engineer":
                employeeIcon = "&#128640";
                employeeExtra = `<a href="https://www.github.com/${employee.github}" class="card-link" target="_blank" > Github username: ${employee.github}<a>`
                break;
            case "Intern":
                employeeIcon = "&#127891";
                employeeExtra = `<p class="card-text"> School: ${employee.school} <p>`
                break;        }
        let employeeCard = 
    `       
    <div class="card">
        <div class="card-header" style="position: relative;">
            <h2 class="card-title">${employee.name}</h2>
            <h3>${employeeIcon} ${employee.role}</h3>
            <div style="position: absolute; top: 0; right: 0">${employee.id}</div>
        </div>
        <div class="card-body">
            <a href="mailto:${employee.email}" class="card-link"> Email: ${employee.email}</a>
            ${employeeExtra}
        </div>
    </div>
    `
      cards += employeeCard
      console.log(cards)
      writeHtml(cards)
    }
    
}

const writeHtml = (cards) => {
    fs.writeFileSync('./dist/index.html', generateHtml(cards))
    console.log('\x1b[32m%s\x1b[0m', "Your Team Profile is finished!")
}

startApp();