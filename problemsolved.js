///////////////////// problem 1;  johns mom gave him 1000 taka and ask him to buy apple 400takas and oranage 300 takas. Now calculate how much johns get returned from shopkeepers. 

var momTakaGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var moneySpend = applePrice + orangePrice;

var shopkeeperRetuns = momTakaGiven - moneySpend;

// console.log(shopkeeperRetuns);


var marks = 75.25 + 65 + 80 + 35.45 + 99.50;
var average = marks / 5;

// console.log(average.toFixed(2));  /// decimal er pore koto sonkha dekhabo setar jonno toFixed() function add kora lage.


///////////////////// problem 2;   find the index of banana and replace banana with watermelon
var fruits = ['apple', 'banana', 'orange'];

var indexOfBanana = fruits.indexOf('banana');
// console.log(indexOfBanana);
// var inputWatermelon = fruits.splice(1, 1, 'watermelon'); /// this is one way
// or
fruits[indexOfBanana] = 'watermelone'; /// this is another way
// console.log(fruits);


///////////////////// problem 3;  print the largest number of 13 , 79, 45 using if else condition

var numb1 = 19;
var numb2 = 79;
var numb3 = 59;

if (numb1 > numb2){
    if (numb1 > numb3) {
        // console.log(numb1, 'numb1 is the largets')
    }
} else if(numb2 > numb3){
    // console.log(numb2, 'numb2 is the largets');
} else{
    // console.log(numb3, 'numb3 is the largets');
}


    