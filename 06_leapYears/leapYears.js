const leapYears = function(givenYear) {
    if (givenYear%4===0) {
        if(givenYear%400===0){
            return true;
        }
        else if(givenYear%100===0){
            return false;
        }
        else{
            return true;
        }
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
