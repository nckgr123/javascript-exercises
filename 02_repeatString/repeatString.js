const repeatString = function(givenString, timesToRepeat) {
    let resultingString="";
    if(timesToRepeat<0){
        return 'ERROR';
    }
    for (let index = 0; index < timesToRepeat; index++) {
        resultingString=resultingString+givenString
    }
    return resultingString
};

// Do not edit below this line
module.exports = repeatString;
