//object practice

var mobile = {
    brand: 'samsung',
    model: 2023,
    price: 39000,
    warrenty: 'no',
}

var myComputer = {
    brand: 'microsoft',
    model: 2020,
    price: 70000,
    warrenty: 'no',
}

// console.log(myComputer.price); // to find a property value from an object, we have to write console objectname.properyname .
// console.log(mobile.brand); // object property value get
myComputer.brand = 'iphone'; // object property value change
// or
// myComputer['brand'] = 'xiomi';
// console.log(myComputer);



/////////// to find the property names from an object this is how need to be written

var findProtperties = Object.keys(myComputer); // to find the objects properties/keys
var findValues = Object.values(myComputer); // to find the objects properties/keys value
// console.log(findProtperties); 
// console.log(findValues);


var shoppingCart = {
    mobile: 2,
    computer: 1, 
    shirt: 5,
    pant: 3, 
    shoes: 2,
}


var objectKeys = Object.keys(shoppingCart); // to find objects all property names or keys
// console.log(objectKeys);

var objectValues = Object.values(shoppingCart); // to find objects all property values
// console.log(objectValues);

for (let index = 0; index < objectKeys.length; index++) {
    const propertyNames = objectKeys[index]; // here index starts using the variable index 0;
    const propertyValues = shoppingCart[propertyNames]; // here index of the objects value starts using the property names;
    console.log(propertyNames, propertyValues);    
}



var result = {
    mohin: 80, 
    habib: 55,
    galib: 95, 
    sumon: 75,
}


var findResultObjectsProperty = Object.keys(result);

for (let index = 0; index < findResultObjectsProperty.length; index++) {
    const resultProperties = findResultObjectsProperty[index]; // here index starts using the variable index 0;
    const resultValues = result[resultProperties]; // here index of the objects value starts using the property names;
    console.log(resultProperties, resultValues);
}

var friendsAge = {
    habib: 33, 
    mohin: 11,
    tabib: 44, 
    sohel: 54,
    sujon: 65,
}

console.log('this is a line break -------------------------------------------------------------  new for loop starts here');



for (const propertyNames in friendsAge) { // we can write anyting words to replace the varialbe 'propertyName'; 
    var value = friendsAge[propertyNames];
    console.log(propertyNames, value);

}


