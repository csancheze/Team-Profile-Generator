const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it('Should create a new Object that has the name, id, and email properties', () =>{
        //arrange
        const propertiesArr = ['name', 'id', 'email']
        
        //Act
        const employee = new Employee()
        
        //Assert
        expect(employee).toHaveProperty(propertiesArr[0]);
        expect(employee).toHaveProperty(propertiesArr[1]);
        expect(employee).toHaveProperty(propertiesArr[2]);

});
    describe('Methods', () => {
        it('Should return name when using getName', () => {
            //arrange
            const employee = new Employee('Cesar','1','email@email.com')
            //act
            const name = employee.getName()
            //assert
            expect(name).toEqual('Cesar')
        });

        it('Should return id when using getId', () => {
            //arrange
            const employee = new Employee('Cesar','1','email@email.com')
            //act
            const id = employee.getId()
            //assert
            expect(id).toEqual('1')
        });

        it('Should return email when using getEmail', () => {
            //arrange
            const employee = new Employee('Cesar','1','email@email.com')
            //act
            const email = employee.getEmail()
            //assert
            expect(email).toEqual('email@email.com')
        });

        it('Should return role "Employee" when using getRole', () => {
            //arrange
            const employeeRole = "Employee"
            const employee = new Employee()
            //act
            const role = employee.getRole()
            //assert
            expect(role).toEqual(employeeRole)
        });

    });

});
