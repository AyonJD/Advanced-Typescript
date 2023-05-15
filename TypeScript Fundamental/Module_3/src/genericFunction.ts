type GenericArray1<T> = T[];
let immidiateArray: GenericArray1<number> = [];

const increaseArraysElements = <T>(input: T): void => {
    immidiateArray.push(input as number);
} 

Array(5).fill(0).forEach((_, index) => { 
    increaseArraysElements<number>(index);
});

console.log(immidiateArray);