var  parola= prompt("inserisci parola");
var parolaReverse=giraParola(parola);



if (parola==parolaReverse) {
    console.log("palindromo")
}
else {
    console.log("non palindromo");
}


function giraParola (parola) {
    var parolaReverse ="";

    for ( var i= parola.lenght -1; i>= 0; i--) {
        parolaReverse+=parola[i];
    }

    return parolaReverse;
}