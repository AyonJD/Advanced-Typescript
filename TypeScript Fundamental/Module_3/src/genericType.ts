type GenericArray<T> = T[];
interface IUser {
    name: string;
    age: number;
}

const stringArray: GenericArray<string> = ['a', 'b', 'c'];
const numberArray: GenericArray<number> = [1, 2, 3];
const arrayArray: GenericArray<GenericArray<string>> = [['a', 'b', 'c'], ['d', 'e', 'f']]; // As its array of array of strings, so it will be GenericArray<GenericArray<string>>
const objectArray: GenericArray<IUser> = [{ name: 'John', age: 30 }, { name: 'Doe', age: 30 }]; // As its array of objects, so it will be GenericArray<IUser>


// Generic Tuple ------------------------------
type TupleAlias<T, U> = [T, U];

const userStatus: TupleAlias<string, number> = ['John', 30];
const userStatus2: TupleAlias<IUser, {salary: number}> = [{ name: 'John', age: 30 }, { salary: 30000 }];