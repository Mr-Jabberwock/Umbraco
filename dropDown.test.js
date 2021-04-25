const { expect } = require("@jest/globals");
const search = require("./dropDown");

//A test to see if the search function will filter out "Superman", when given the search criteria "Su"
//If it does it will return false (it does not hide the element from the search results)
test("properly searches for option matching input value", () =>{
    expect(search("Su",["Superman", "Batman"])).toBe(false);
})