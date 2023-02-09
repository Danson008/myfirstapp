/* 

Arrow Function: 

const myFunc() = () => {

    ..
    ..
}

No more issue with this keyword.
*/

function printMyName(name) {
    console.log(name);
}

printMyName('Max')

//Output: Max

// >>>>>Arrow Function
const printMyName = (name) => {
    console.log(name);
}
printMyName("Max");

//Output: Max


const printMyName = (name,age) => {
    console.log(name, age);
}
printMyName("Max", 2)

//Output: Max, 2

const multiply = (number) => number*2;
console.log(multiply(2));

//Output: 4