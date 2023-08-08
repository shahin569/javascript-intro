/// break menthod is used to stop a loop and continue method is use to skip a loop iteam. 

var numb = [11, 34, 43, 56, 38, 85, 49, 35, 77, 95, 44, 78];

for (var index = 0; index < numb.length; index++) {
    const element = numb[index];

    if (element > 50) {
        break;
    }    
    console.log(element);
}


for (var index = 0; index < numb.length; index++) {
    const element = numb[index];

    if (element > 50) {
        continue;
    }    
    console.log(element);
}
