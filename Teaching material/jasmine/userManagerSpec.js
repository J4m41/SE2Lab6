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

 /* Test for storeUsername
  * it checks 
  * 1- correct input, new user
  * 2- correct input, existin user
  * 3- wrong input
  */
describe("Test storeUsername",function() {
    describe(" with a new user",function() {
        it("it increase the list of users", function(){
            userManager.storeUsername("User");
           expect(userManager.getList()).toContain(["User", 1]);
        });
    });
    
    describe(" with a user already present ",function() {
        it("it increase the nuumber of users", function(){
            userManager.storeUsername("username2");
           expect(userManager.getList()).toContain(["username2", 3]);
        });
    });
    
    describe(" with an incorrect input",function() {
        it("it returns null", function(){
           expect(userManager.storeUsername(null)).toBeNull();
        });
    });
    
});

 /* Test for storeUsername
  * it checks 
  * 1- with 1 user with higher value
  * 2- with 2 userw with same, higher value
  */
describe("Test mostUsed",function() {
    describe(" with a user with higher value than others",function() {
        it("it returns the user", function(){
            
           expect(userManager.mostUsed()).toBe("username2");
        });
    
    });
    
    describe(" with two user with same, higher values than others ",function() {
        it("it return the first user", function(){
            
            //create a new store managers, since i cannot reset the list of user
            var userManager2 = require('../userManager.js');
            
            userManager2.storeUsername("username");
            expect(userManager2.mostUsed()).toBe("username");
        });
    
    });
    
});