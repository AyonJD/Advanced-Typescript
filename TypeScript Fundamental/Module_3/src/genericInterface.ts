/* The `interface IGenericUser<T, U = null>` is defining a generic interface in TypeScript. It has
three properties: `name`, `age`, and `job`. The `job` property is of type `T`, which means it can be
any type that is passed as a generic type argument when creating an object of this interface. The
`married` property is an optional property of type `U`, which is also a generic type argument with a
default value of `null`. This interface can be used to create objects with different types of `job`
properties and optionally a `married` property. */
interface IGenericUser<T, U = null>{
    name: string;
    age: number;
    job: T;
    married?: U; // Optional property
}

interface IUserJob {
    salary: number;
    designation: string;
    company?: string; // Optional property
}

const userInfo1: IGenericUser<boolean> = {
    name: 'John',
    age: 30,
    job: false
}

/* `const userInfo2` is creating an object of type `IGenericUser` with two generic types: `IUserJob`
and `boolean`. */
const userInfo2: IGenericUser<IUserJob, boolean> = {
    name: 'John',
    age: 30,
    job: { salary: 30000, designation: 'Full Stack Developer' },
    married: true
}
