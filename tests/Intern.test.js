const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it('Should create a new Intern Object that has the name, id, and email properties', () =>{
        //arrange
        const propertiesArr = ['name', 'id', 'email']
        
        //Act
        const employee = new Intern()
        
        //Assert
        expect(employee).toHaveProperty(propertiesArr[0]);
        expect(employee).toHaveProperty(propertiesArr[1]);
        expect(employee).toHaveProperty(propertiesArr[2]);

    });

    it('Should create a new Object that has the school property', () =>{
        //arrange
        const property = "school"
        
        //Act
        const intern = new Intern();
        
        //Assert
        expect(intern).toHaveProperty(property)
        

    });

    describe('Methods', () => {

        it('Should return role school name when using getSchool', () => {
            //arrange
            const schoolEx = "school1"
            const intern = new Intern('Cesar','1','email@email.com','school1')
            //act
            const school = intern.getSchool()
            //assert
            expect(school).toEqual(schoolEx)
        });

        it('Should return role "Intern" when using getRole', () => {
            //arrange
            const employeeRole = "Intern"
            const intern = new Intern()
            //act
            const role = intern.getRole()
            //assert
            expect(role).toEqual(employeeRole)
        });
            
    });

    
});
