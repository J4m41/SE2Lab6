//test of the APIs

//lib for sending requests
var request = require("request");

//set base URL
var base_url = "http://localhost:5000/";

 /* Test for /WORLD
  * it checks if the server answers with 200 code header
  */
describe("Test /WORLD", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "world/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /PLANET
  * it checks if the server answers with 200 code header
  */
describe("Test /planet", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "planet/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

//library for JSON requests
requestJSON = require('request-json');
var client = requestJSON.createClient(base_url);
 
/* Test for /PERS
  * /male
  *  it checks 
  *  1- with correct parameter, the answer is 200
  *  2- with incorrect parameter, the answer is  206
  *
  * /female
  *  it checks 
  *  1- with correct parameter, the answer is 200
  *  2- with incorrect parameter, the answer is  206
  *
  * /JSON
  *  it checks 
  *  1- with correct parameter, the answer is 200 and the anser corresponds
  *  2- with incorrect parameter, the answer is  206
  */
describe("Test /PERS/", function() {
  describe("/male", function() {
    //set the data
    var data = {username: 'username2'};
      
    it("to returns status code 200", function(done) {
      client.post(base_url + "pers/male/", data, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
    
    //wrong parameter
    data1 = {name: 'username'};
    it("to returns status code 406", function(done) {
      client.post(base_url + "pers/male/", data1, function(err, res, body) {
        expect(res.statusCode).toBe(406);
        done();
      });
    });
      
      
  });
    
  describe("/female", function() {
    //set the data
    var data = {username: 'username2'};
      
    it("to returns status code 200", function(done) {
      client.post(base_url + "pers/female/", data, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
    
    //wrong parameter
    data1 = {name: 'username'};
    it("to returns status code 406", function(done) {
      client.post(base_url + "pers/female/", data1, function(err, res, body) {
        expect(res.statusCode).toBe(406);
        done();
      });
    });
      
      
  });   
    
  describe("/json", function() {
    //set the data
    var data = {username: 'username2'};
      
    it("to returns status code 200", function(done) {
      client.post(base_url + "pers/json/", data, function(err, res, body) {
        expect(body).toEqual(
            { 
                greetings: 'hello', 
                target: 'username2'
	       }
        );
          
        done();
      });
    });
    
    //wrong parameter
    data1 = {name: 'username'};
    it("to returns status code 406", function(done) {
      client.post(base_url + "pers/json/", data1, function(err, res, body) {
        expect(res.statusCode).toBe(406);
        done();
      });
    });
      
      
  });  

});
