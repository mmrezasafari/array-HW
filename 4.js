let value = "sa2lam 3mmrez4a hasta1m" 

function isString (value) {
    let numberArray = [] ;
    numberArray = value.match(/\d+/g);
    return numberArray ;
}
console.log(isString(value)) ;

