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
var numberArr = [14, 32, 62, 76, 95, 12, 55, 97]
// console.log(arrStarts);

var arrIndexTest = arrStarts[0]; // array index starts from 0 'zero'
var arrLengthTest = arrStarts.length;  // array length janar jonno arrayname.length dite hoi
// console.log(arrStarts[0]); // to find an array vaule using index value// index value diye array er value ber korr niom arrayName[0];
// console.log(arrLengthTest);
// console.log(numberArr[5]);
arrStarts[0] = 'hablu'; // index diye kono value ke replace korar jonno aivabe likhete hoi, index er vetore value add korar jonno aitar surute variable dewa lagena.
// console.log(arrStarts);
// console.log(arrStarts.indexOf('habib')); // indexOf bebohar kora hoi kono akta array value er index numbertake ber korar jonno
var arrIndexofFunction = arrStarts.indexOf('habib');
// console.log(arrIndexofFunction);

var setIndex = [11, 12, 14, 15, 17, 18, 19];
setIndex[1] = "hablu"; // index number diye array er vetore akta value ke replace kore dewar jonno aivabe likhete hoi
// console.log(setIndex);




//******************** javascript add or remove elemento from array using push and pop, Shift, Unshift*/

var pushPopvar = ['rahim', 'karim', 'habib', 'sabid', 'rabid', 'devid'];
// pushPopvar.push('newnamebypush1'); // push is to add a new array value at the end
// console.log(pushPopvar);
pushPopvar.pop(); // pop diye array er moddhe theke last element ke ber kore dewa hoi.
// console.log(pushPopvar);
// pushPopvar.shift(); // shift diye array er fist value take remove kore dewa hoi
// pushPopvar.unshift('hellounshift'); // unshift diye array er fist a akta new value dewa hoi
// console.log(pushPopvar);
var pnumber = [22, 44, 66, 77, 88, 99]
pnumber.push(199, 299, 399, 499, 599);
pnumber.pop(); // pop use kore last er index howa value take remove kore dewa jai
var spliceTest = pnumber.splice(2, 3); // splice diye array er vertor theke nirdisto songkhok value ke index diye kete niye asa jai, splice sue korle jei value gula kete ana hoi, segula r array er vetore thaken. 
var sliceTest = pnumber.slice(0,3); // slice diyeo array er vetorer theke nirdiosto value ke index diye kete niye asa jai, but eta array er vetorer value sob gulake sekhae rekhe diye sudho tar value gulake niye ase dekhanor jonno.
// console.log(sliceTest);











