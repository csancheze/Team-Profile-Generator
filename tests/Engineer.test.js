const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it('Should create a new Engineer Object that has the name, id, and email properties', () =>{
        //arrange
        const propertiesArr = ['name', 'id', 'email']
        
        //Act
        const employee = new Engineer()
        
        //Assert
        expect(employee).toHaveProperty(propertiesArr[0]);
        expect(employee).toHaveProperty(propertiesArr[1]);
        expect(employee).toHaveProperty(propertiesArr[2]);

    });

    it('Should create a new Object that has the github property', () =>{
        //arrange
        const property = "github"
        
        //Act
        const engineer = new Engineer();
        
        //Assert
        expect(engineer).toHaveProperty(property)
        

    });

    describe('Methods', () => {

        it('Should return role github username when using getGithub', () => {
            //arrange
            const githubEx = "username"
            const engineer = new Engineer('Cesar','1','email@email.com','username')
            //act
            const github = engineer.getGithub()
            //assert
            expect(github).toEqual(githubEx)
        });

        it('Should return role "Engineer" when using getRole', () => {
            //arrange
            const employeeRole = "Engineer"
            const engineer = new Engineer()
            //act
            const role = engineer.getRole()
            //assert
            expect(role).toEqual(employeeRole)
        });
            
    });

    
});
