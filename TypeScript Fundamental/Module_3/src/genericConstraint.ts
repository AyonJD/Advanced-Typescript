const surname = 'Doe';

interface IGenericUser<T>{
    name: string;
    age: number;
    job: T;
}

const userInfo3 = {
    name: 'John',
    age: 30,
    job: false
}

const addTwoData = <T extends {age: number}, U>(data1: T, data2: U): T => { 
    const result = { ...data1, surname: data2 }
    return result;
}

const result = addTwoData(userInfo3, surname)

// Here the extends keyword is used to specify that the generic type T must be an object that has an age property. This allows TypeScript to infer that the age property exists on the data1 parameter, which means that we can safely access it without TypeScript throwing a compile-time error. And as it is fixed that the data1 will be an object with age property, we can call it generic constraint


// ------------------------------- Generic Constraint with keyof -------------------------------

interface IInfo{
    name: string;
    age: number;
    job: boolean;
}

interface IMendetoryInfo{
    name: string;
    age: number;
}

const userInfo4: IInfo = {
    name: 'John',
    age: 30,
    job: false
}

/**
 * The function `getValue` takes an object and a key and returns the value of the specified key in the
 * object.
 * @param {T} object - The first parameter "object" is of type T, which extends IMendetoryInfo. This
 * means that the object must have all the properties defined in the IMendetoryInfo interface.
 * @param {U} key - The "key" parameter is a generic type "U" that extends the keys of the "object"
 * parameter of type "T". It represents the specific key of the object whose value needs to be
 * retrieved.
 * @returns The function `getValue` returns the value of the property with the specified key from the
 * object passed as the first argument. The type of the returned value is inferred based on the type of
 * the property with the specified key in the object.
 */
const getValue = <T extends IMendetoryInfo, U extends keyof T>(object: T, key: U): T[U] => { 
    return object[key];
}

const value = getValue(userInfo4, 'job');
console.log(value);