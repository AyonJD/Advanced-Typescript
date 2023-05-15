// The main difference between never and void is that never is used to represent the type of values that never occur, whereas void is used to represent the absence of a value.

// */ VOID
// When a function does not return a value, it is common to say that it returns void. If it have the power to return but does not return anything then we use void type. For example, the following function returns void:

function warnUser(): void {
  console.log("This is my warning message");
}

// */ NEVER
type Fruit = 'apple' | 'banana';

function getFruitColor(fruit: Fruit): string {
  switch (fruit) {
    case 'apple':
      return 'red';
    case 'banana':
      return 'yellow';
    default:
          const _exhaustiveCheck: never = fruit;
      throw new Error(`Unknown fruit: ${fruit}`);
  }
}

console.log(getFruitColor('apple'));

/*
    The _exhaustiveCheck variable is not used in the getFruitColor function. However, it's still an important part of the function because it serves as a "safety net" to ensure that all possible cases of the Fruit type have been handled.

    The _exhaustiveCheck variable is declared with a type of never, which means that it can never actually have a value. This is because the switch statement in the getFruitColor function covers all possible cases of the Fruit type, so there's no way for _exhaustiveCheck to ever be assigned a value.

    The purpose of declaring _exhaustiveCheck as never is to help catch errors at compile-time. If someone were to add a new fruit to the Fruit type without updating the getFruitColor function to handle that new fruit, then the switch statement would not cover all possible cases of the Fruit type.

    In this case, because the _exhaustiveCheck variable has a type of never, TypeScript will throw an error at compile-time because it knows that there are still possible cases of the Fruit type that have not been handled.

    So, while _exhaustiveCheck may not be used in the actual logic of the getFruitColor function, it's still an important part of the code because it helps catch errors at compile-time and ensures that the function can handle all possible cases of the Fruit type.
*/

function throwError(message: string): never {
  throw new Error(message);
}

// It will never return anything, it will always throw an error



