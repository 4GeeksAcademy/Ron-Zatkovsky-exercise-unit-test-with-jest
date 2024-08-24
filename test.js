// Import the function sum from the app.js file
const { sum, fromDollarToYen } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One dollar should be 146 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5*146.26168224299064 ; 
    
    // This is the comparison for the unit test
     expect(yens).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const euros = fromEuroToDollar(3.5);

    const expected = 3.5*1.07 ; 
    
    // This is the comparison for the unit test
     expect(euros).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One yen should be "+(oneEuroIs["GBP"]/oneEuroIs["JPY"]) +" pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5*0.005559105431309904 ; 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})