//**variable declaration

var price = 11;
// price += 9; //short hand increase
// price++; //to increase 1 by 1

price--; //to decrease 1 by 1

// console.log(price); // 10 is the final result.


// ***Make numbers String to a number

var marks = '31';

// console.log(marks); // output is a string

var convertToNumber = parseInt(marks);

// console.log(convertToNumber); // output is a number which is converted from a string number. 

var marksFloat = '31.33';

// console.log(marksFloat); // output is a float string number

var convertMarksFloat = parseFloat(marksFloat); // to convert a sting float number we need to use parseFloat

// console.log(convertMarksFloat); // output is a float number

var customTypesCheck = 22;
var customTypesCheckIntgr ='test';
var customTypesCheckBoolean = true;

// console.log(typeof customTypesCheck); // to check the type of a vaule of a varriable, we need to use typeof 

// console.log(typeof customTypesCheckIntgr); // check Intesger type

// console.log(typeof customTypesCheckBoolean); // Check Boolean

var numb1 = 0.1;
var numb2 = 0.2;

var sum = numb1 + numb2;
sum = sum.toFixed(1) // to show certain number after the dot, dosomiker pot koto sonkha hobe seta dekhar jonno toFixed(1)
sum = parseFloat(sum) // to convert float string number to a float

// console.log(sum); 


//******************** javascript Array*/

var arrStarts = ['rahim', 'karim', 'habib', 'sabid', 'rabid', 'devid'];
console.log(arrStarts);

