// function exercise

function sumTest(a, b, c, d) {
    var sum = (a+b+c+d); 
    console.log(sum);

}

// sumTest(1, 3, 4, 5);

function add(numb1, numb2) {
    // console.log(numb1, numb2);    
    var sum = numb1 + numb2;
    return sum;
}

var firstNumber = 20;
var seconNumber = 80
var total  = add(firstNumber, seconNumber);
// console.log(total);


// per singara price 10, how many singara i can buy at 40 taka

function singara(singaraTaka) {
    var singaraPrice = 10;
    var sum = singaraTaka / singaraPrice;
    return sum;  
}

var taka = 40;
var singaraTakaPaid = singara(taka);
console.log(singaraTakaPaid);


function eggPamu(eggTaka) {
    var pricePerEgg = 10;
    var eggCalculation = eggTaka / pricePerEgg;
    return eggCalculation;
    
}

var eggDam = 50;
var eggGetFromShop = eggPamu(eggDam);
console.log(eggGetFromShop);

