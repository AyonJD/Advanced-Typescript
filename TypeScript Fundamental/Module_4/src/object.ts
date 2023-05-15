class AddNumbers {
    num1: number;
    num2: number;

    constructor(param1: number, param2: number) {
        this.num1 = param1;
        this.num2 = param2;
    }
    addNum(): number{
        return this.num1 + this.num2;
    }
}

const addNumbers = new AddNumbers(10, 20);
// console.log(addNumbers.addNum())

class ObjMaker {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const objMaker = new ObjMaker('Ayon', 25);
// console.log(objMaker);
// console.log(objMaker.getDetails());


// We can use public keyword to make the properties public, so that we can access them from outside of the class, also avoid


class Person {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('Ayon', 25);
// console.log(person1);
