const removeFromArray = function(baseArray, ...elementsToBeRemoved) {
    //initialize toDeleteArray
    let toDeleteArray=[]
    //go through baseArray
    for (let i = 0; i < baseArray.length; i++) {
        //check if element of baseArray is in elementsToBeRemoved
        if(elementsToBeRemoved.includes(baseArray[i])){
            toDeleteArray.push(i)
        }
    }
    let numberOfElementsToDelete=toDeleteArray.length;
    for (let j = 0; j < numberOfElementsToDelete; j++) {
        let currentPositionToDelete=toDeleteArray.pop()
        baseArray.splice(currentPositionToDelete,1)
    }
    return baseArray;
    //for len of toDeleteArray
        //pop last element
            //use splice to delete element at position
            //using pop since we first went front to back and now back to front so we dont shift the positions while deleting
};

// Do not edit below this line
module.exports = removeFromArray;