//test of the user managers

//user manager
var userManager = require('../userManager.js');

 /* Test for safeUsername
  * it checks 
  * 1- correct input
  * 2- wrong input
  */
describe("Test safeUsername",function() {
    describe(" on correct input",function() {
        it("it returns the parsed string", function(){
            //check if the string is substituted correctly
           expect(userManager.safeUsername("User")).toBe("_ser");
        });    
    });
    
    describe(" on incorrect input",function() {
        it("it returns null", function(){
           expect(userManager.safeUsername(null)).toBeNull();
        });
    
    });
    
    
});
