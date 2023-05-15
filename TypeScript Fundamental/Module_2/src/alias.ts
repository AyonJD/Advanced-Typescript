// Use descrtuching to create aliases for types, it makes it easier to read and understand the code

type Calculation = (a: number, b: number) => number;

const calculator = ({ operand1, operand2, operation }: { operand1: number, operand2: number, operation: Calculation }) => { 
    return operation(operand1, operand2);
}

console.log(calculator({ operand1: 10, operand2: 5, operation: (a, b) => a + b }), 'Adder');
console.log(calculator({ operand1: 10, operand2: 5, operation: (a, b) => a + b}), 'Subtracter')
console.log(calculator({ operand1: 10, operand2: 5, operation: (a, b) => a + b }), 'Multiplier')


type Calculate = (x: number, y: number) => number;

const calculate = ({ operand1, operand2, method }: { operand1: number, operand2: number, method: Calculate }) => { 
    return method(operand1, operand2);
}

console.log(calculate({ operand1: 10, operand2: 5, method: (x, y) => x + y }))


// Eunion types and Intersection types
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: Employee | ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

// Here e1 can be either Employee or ElevatedEmployee type. If its Employee type, it will not have privileges property, if its ElevatedEmployee type, it will have privileges property

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
