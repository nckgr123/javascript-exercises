const findTheOldest = function(people) {
    return people.reduce((person,oldestKnown)=>{
        if(getAge(person)>getAge(oldestKnown)) return person;
        else return oldestKnown;
    })
};
function getAge(person){
    if(person.yearOfDeath){
        return person.yearOfDeath-person.yearOfBirth;
    }
    else return new Date().getFullYear -person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
