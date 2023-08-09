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
// console.log(singaraTakaPaid);


function eggPamu(eggTaka) {
    var pricePerEgg = 10;
    var eggCalculation = eggTaka / pricePerEgg;
    return eggCalculation;
    
}

var eggDam = 50;
var eggGetFromShop = eggPamu(eggDam);
// console.log(eggGetFromShop);

function assignmentNumbers(assignment1, assignment2, assignment3) {
    var totalMarks = assignment1 + assignment2 + assignment3;
    var myAverageMarks = totalMarks / 3;
    return myAverageMarks;
}

var assignment1Marks = 60;
var assignment2Marks = 54;
var assignment3Marks = 60;

var myTotalAssignmentAverage = assignmentNumbers(assignment1Marks, assignment2Marks, assignment3Marks);

// console.log(myTotalAssignmentAverage);


function multiFunctionsResultsSum(result1, result2){
    const sum = result1 + result2;
    return sum;
}
const result1 = multiFunctionsResultsSum ( 30, 40)
const result2 = multiFunctionsResultsSum ( 90, 30)
const finalResult = multiFunctionsResultsSum (result1, result2);
// console.log(finalResult);


///Excercise: write a function called make_avg() which will take an theree integers and return the average of those values. 

function make_avg(a, b, c){
    const sum = a + b + c;
    const average = sum / 3;
    return average.toFixed(2);
}

const resultAverage = make_avg(33, 45, 22);
// console.log(resultAverage);


///Excercise: create a funciotn to calculate inches to feet ---------------------------------------------------------------------------------------------


function height(ince) {
    const oneFeet = 12;
    const heightInFeet = ince / oneFeet;
    const result = heightInFeet.toFixed(2);
    return result;
}
var incesInput = 130 ;
var functionInput = height(incesInput);
// console.log(functionInput);



///Excercise: find even and odd number , if number is even - return true - else false ---------------------------------------------------------------------------------------------


function oddEvenFiinder(number) {
    const numberCalculation = number % 2
    if (numberCalculation == 0) {
        return true;
    }else{
        return false;
    }

}
const myNumber = 3783;
const finder = oddEvenFiinder(myNumber);
// console.log(finder);

///Excercise: find leap year---------------------------------------------------------------------------------------------

function isLeapYearcheck(year) {
    const yearCalculatoin = year % 4;
    const yearResult = yearCalculatoin;
    if (yearCalculatoin == 0) {
        console.log('is a leap year')        
    }else {
        console.log('not a leap year');
    }  
}
// isLeapYearcheck(2008);


///Excercise: find number from an array and calculate sum of them---------------------------------------------------------------------------------------------



function arraySumCalculation(number) {
    let sum = 0;
    for (let index = 0; index < number.length; index++) {
        const element = number[index];
        sum = sum + element;
    }
    return sum;
    
}
const numbers  = [33, 44, 65, 78, 38, 40, 77, 20, 75];
var arraySend = arraySumCalculation(numbers);

// console.log(arraySend);




