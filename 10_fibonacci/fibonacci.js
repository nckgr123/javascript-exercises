const fibonacci = function(numGiven) {
    if(numGiven<0)return "OOPS";
    if(numGiven===0)return 1;
    numGiven= +numGiven;
    let sequence = [0,1]
    //gen sequence for numGiven
    for(let i=1;i<numGiven;i++){
        sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
    }
    return sequence.pop()

};

// Do not edit below this line
module.exports = fibonacci;
