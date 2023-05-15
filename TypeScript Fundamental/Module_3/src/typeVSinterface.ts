// The basic difference between type and interface is that type can be used to declare primitive types, union types, tuple types, and intersection types whereas interface can only be used to declare object types

// Type alias example
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
console.log(getName('John'));
console.log(getName(() => 'John'));

// Interface example
interface NameInterface {
    name: string;
}

interface IextendedNameInterface extends NameInterface {
    age: number;
}

const userInfo: IextendedNameInterface = {
    name: 'John',
    age: 30
}

// Type alias extends another type alias example
type PersonType = {
    name: string;
    age: number;
}

type PersonPartialType = PersonType & {
    address: string;
}

const person: PersonPartialType = {
    name: 'John',
    age: 30,
    address: 'Bangalore'
}


// Function type alias example ------------------------------
type AdderTypeAlias = (num1: number, num2: number) => number;

const adder: AdderTypeAlias = (num1, num2): number => {
    return num1 + num2;
}

// Function interface example ------------------------------
interface AdderInterface { 
    (num1: number, num2: number) : number;
}

const adderInterface: AdderInterface = (num1, num2): number => {
    return num1 + num2;
}

// Type alias with array example ------------------------------
type StringArrayAlias = string[];
const stringArrayAlias: StringArrayAlias = ['John', 'Doe'];

// Interface with array example ------------------------------
interface StringArrayInterface {
    [index: number]: string;
}
const stringArrayInterface: StringArrayInterface = ['John', 'Doe'];