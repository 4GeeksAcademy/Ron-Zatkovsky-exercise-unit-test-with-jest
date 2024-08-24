const sum = (a,b) => {
    return a + b
}
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen= ((number)=>{
    return (oneEuroIs["JPY"]/oneEuroIs["USD"])*number
});


const fromYenToPound=((number)=>{
    return (oneEuroIs["GBP"]/oneEuroIs["JPY"])*number
});

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum,  fromDollarToYen, fromEuroToDollar, fromYenToPound};