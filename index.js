const inquirer = require("inquirer");
const Manager = require("./lib/Manager")

const listEmployees = []

const startApp = () => {

inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the manager name?",
            validate(answer) { if(!answer) {
                return "Please, write a name!"
            }
            return true
            }
        },
        {
            name: "id",
            type: "input",
            message: "Enter the manager id?",
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
            message: "Enter the manager email?",
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
            message: "Enter the manager office number",
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
        employeeMenu();
    })
}

const employeeMenu = () => {
inquirer
    .prompt([
        {
            name: "menu",
            type: "list",
            message: "What type of employee do you want to add?",
            choices: ["Engineer","Intern","Exit"]
        }
            
    ])
    .then((answer) =>{
        if (answer = "Engineer") {
            addEngineer();
        }
        if (answer = "Intern") {
            addIntern();
        }
        if (answer = "Exit") {
            renderTeam();
        }
    })
}

startApp();