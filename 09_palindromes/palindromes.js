const palindromes = function (stringInput) {
    let inputArr=processArray(stringInput.split(""));
    let arrReverse=processArray(stringInput.split("").reverse());
    return(arrReverse.join('')===inputArr.join(''))
};
function processArray(arr){
    const punctuationChars=[",",".","!"," "]
    // RM punctuation
    arr= arr.filter(element=>!punctuationChars.includes(element))
    //map to lowercase
    arr= arr.map(element=>element.toLowerCase())
    return arr;
}

// Do not edit below this line
module.exports = palindromes;
