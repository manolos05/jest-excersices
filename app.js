const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(usd) {

    let dollarToYen = (0.83 * usd) * 127.9;

    return dollarToYen;
}

const fromYenToPound = function(valueInYen){

    let yenToPound = (0.8 * valueInYen) / 127.9;

    return yenToPound;

}


const sum = (a, b) => {
    return a + b
}



module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

