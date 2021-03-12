const sum = (num1, num2) => num1+num2;
const pi = 3.14;

class SomeClass {
    constructor(){
        console.log("new object created");
    }
}

module.exports = {sum: sum, pi: pi, SomeClass: SomeClass}