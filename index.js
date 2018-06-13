const newArray = [1, 2, 3, 4, 5]

function multiplyArrayElements (newArray) {
    var total=1;
    for (var i=0; i<newArray.length; i++) {
        total = total * newArray[i];
    } 
    return total;
}