const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it('Should create a new Manager Object that has the name, id, and email properties', () =>{
        //arrange
        const propertiesArr = ['name', 'id', 'email']
        
        //Act
        const employee = new Manager()
        
        //Assert
        expect(employee).toHaveProperty(propertiesArr[0]);
        expect(employee).toHaveProperty(propertiesArr[1]);
        expect(employee).toHaveProperty(propertiesArr[2]);

});
    it('Should create a new Object that has the officeNumber property', () =>{
        //arrange
        const property = "officeNumber"
        
        //Act
        const manager = new Manager();
        
        //Assert
        expect(manager).toHaveProperty(property)
        

});
    describe('Methods', () => {

        it('Should return role "Manager" when using getRole', () => {
            //arrange
            const employeeRole = "Manager"
            const manager = new Manager()
            //act
            const role = manager.getRole()
            //assert
            expect(role).toEqual(employeeRole)
        });
            
        });

    
});
