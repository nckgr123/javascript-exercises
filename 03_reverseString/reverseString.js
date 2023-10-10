const reverseString = function(givenString) {
    let splitString= givenString.split('');
    let loopLength=splitString.length
    let outPutStringArray=[];
    //go through array and put last element at current position in array
    for (let index = 0; index < loopLength; index++) {
        outPutStringArray[index] =splitString.pop()
    }
    return outPutStringArray.join('')
};

// Do not edit below this line
module.exports = reverseString;
