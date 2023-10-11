const sumAll = function(firstInt,secondInt) {
    if(typeof(firstInt)!="number"
    ||typeof(secondInt)!="number"
    ||firstInt<0
    ||secondInt<0){
        return "ERROR"
    }

    if (firstInt>secondInt) {
        let swapVar=firstInt;
        firstInt=secondInt;
        secondInt=swapVar;
    }
    let summedInts=0
    for (let i = firstInt; i <= secondInt; i++) {
        summedInts+=i
    }
    return summedInts
};

// Do not edit below this line
module.exports = sumAll;
