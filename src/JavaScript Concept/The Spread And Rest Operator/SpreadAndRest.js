/*

Spread: Used to split up array element OR Object Properties

const newArray = [...oldArray, 1,2]
const newObject = {...oldObject, newProp:5}


Rest: Used to merge a list of function argument into an array.

function sortArgs(...args){
    return args.sort()
}

*/


//Spread Operator

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

//output: [1,2,3,4]

const person = {
    name:"Max"
};

const newPerson  = {
    ...person,
    age:28
}

console.log(newPerson);


//Rest Operator

const filter = (...args) => {
    return args.filter(el => el===1);
}

console.log(filter(1,2,3));

//Output: [1]