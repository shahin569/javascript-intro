var roastGiven = 0;
// console.log(roastGiven);

while (roastGiven < 5 ) { //while loop
    // console.log(roastGiven);
    // console.log('5 roast has been server')
    roastGiven++;    
}

// console.log('//for loop practice starts here')

for (var roastGiven = 0; roastGiven < 5 ; roastGiven++) { //For loop 
    // console.log(roastGiven);
    // console.log('5 roast has been server')
}

var arrLoopTest = [11, 22, 33, 44, 55, 66, 77, 88];
var lengthCheck = arrLoopTest.length;

// console.log(lengthCheck);


for (let indexNumber = 0; indexNumber < arrLoopTest.length; indexNumber++) {
    const element = arrLoopTest[indexNumber];
    // console.log(element);    
}

for (const i of arrLoopTest) {
    // console.log('i love you');
    
}

var reversLoopTest = 0; //[11, 22, 33, 44, 55, 66, 77, 88];

while (reversLoopTest < 10) {
    // console.log('thikache');
    reversLoopTest++;    
}

var reversArrLoopTest = [11, 22, 33, 44, 55, 66, 77, 88];

// for (var i = 0; i < reversArrLoopTest.length; i++ ) {
//     var element = reversArrLoopTest[i];
//     console.log(element);    
// }

for (var i = reversArrLoopTest.length - 1; i >= 0; i-- ) { // reverse array er value ber korte gele -1 dite hobe array er man er sese.
    var element = reversArrLoopTest[i];
    // console.log(element);    
}

var arr = [1, 2, 3, 4, 5];
 
for (var i = arr.length - 1; i >= 0; i--) {
    // console.log(arr[i]);
}



/// 39 time wrting ajke amar mon valonei string 
var display = "ajke amar mon valo nai";

for (let index = 1; index <= 39; index++) {
    // console.log(index, ':', display);
    
}

//// practinc: showing numbers from 58 to 98

for (let index = 58; index <= 98; index++) {
    // console.log(index);    
}


/// showing all even number from 412 to 444 using for loop. 
for (let index = 412; index < 444; index+= 2) {
    // const element = index;
    // console.log(index);
    
}

/// showing all odd number from 581 to 623 using for loop. 
for (let index = 581; index < 623; index+= 2) {
    // const element = index;
    // console.log(index);
    
}


var mobile = ['samsung', 'xiomi', 'nokia', 'oppo', 'apple', 'HTC'];

var mobileByIndex = mobile[1];
// console.log(mobileByIndex);

for (let index = 0; index < mobile.length; index++) {
    const element = mobile[index];
    // console.log(element);

}

///// stop / break  loop on a certain position

for (let index = 30; index < 83; index++) {
//    console.log(index);
   if (index == 44) { //we break it in 44
    break;
    
   }
    
}

var banglaBook = 120;
var englishBook = 150;
var literacrBook = 250;
var arabicBook = 220;
var farsianBook = 200;
var scienceBook = 160;

var bookPrice = [255, 300, 150, 110, 422, 250, 260, 130, 180, 200, 190];

for (let index = 0; index < bookPrice.length; index++) {
    const element = bookPrice[index];

    if (element < 200) {
       continue;
    }

    console.log(element);
    
}