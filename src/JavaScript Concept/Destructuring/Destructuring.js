/*

Easily extract arraye elements or object properties and store them in a variable.

Array destructuring

[a,b] = ['Hello', 'Max']
console.log(a) //Hello
console.log(b) //Max


Object destructuting

{name} = {name:'Max', age:28}
console.log(name) //Max
console.log(age) //Undefined

*/

//---->//Array Destructuring
const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1, num2);

//output:1,2