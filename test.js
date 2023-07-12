

test('adds 14 + 9 to equal 23', () => {

    const { sum } = require('./app.js');

    let total = sum(14, 9);

    expect(total).toBe(23);

});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("0.83 dollars should be 106.157  yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(5)).toBe(530.785); //1 euro son 0.83 dolares, entonces 4.15 euros deberian ser = (3.5 * 1.2)
})

test("0.8 GBP should be 127.9 YENES", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(127.9)).toBe(.8); //10 euro son 1279 yenes, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


