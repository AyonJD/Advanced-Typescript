let unknownData;
unknownData = '1';

(<string>unknownData).toUpperCase();
(unknownData as string).toUpperCase();
console.log(typeof unknownData)

// Assertion
// 1. Angle Bracket
// 2. as syntax

// Assertion is a way to tell compiler that you know more than it does


interface ICustomError {
    message: string;
}

try {
    // Do something
} catch (error) {
    console.log((<ICustomError>error).message)
}