/*
    any is a type that tells TypeScript to turn off type-checking for a particular value. When you declare a variable as any, TypeScript allows you to assign any value to that variable, regardless of its type. This means that you can use any property or method on the any variable without TypeScript raising a compile-time error.

    While any can be convenient to use, it can also be dangerous. Because TypeScript turns off type-checking for any values, it's easy to accidentally introduce bugs into your code if you're not careful. Additionally, if you use any too liberally in your codebase, you lose some of the benefits of using TypeScript in the first place.

    On the other hand, unknown is a type that is similar to any, but with more strict rules. When you declare a variable as unknown, TypeScript does not allow you to use any property or method on that variable until you first narrow down its type.

    This means that you must perform some type of type-checking before you can use the value of an unknown variable, which can help catch errors earlier in the development process. For example, if you have a function that accepts an unknown value as a parameter, you could check its type before using it:
*/

function doSomething(value: unknown) {
    if (typeof value === 'string') {
      console.log(value.toUpperCase());
    }
}
  
/*
    In this example, we're using the typeof operator to check if value is a string before calling the toUpperCase method on it. If value is not a string, this code will not compile.

    Overall, while any can be convenient to use, it can also be dangerous and can reduce the benefits of using TypeScript in the first place. unknown, on the other hand, can be more strict and can help catch errors earlier in the development process.
*/