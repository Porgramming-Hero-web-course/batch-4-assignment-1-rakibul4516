Blog-3 : Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

In typescript, type guards are necessary because they help the TypeScript compiler understand the type of a variable at runtime. TypeScript is a statically typed language, but sometimes it cannot determine the exact type of a variable. Type guards help in narrowing down the type of a variable so that we can safely access its properties or methods without causing errors. There are different types of type guards. For example: typeof, instanceof, in.

Use cases of "typeof" type guard:

function printLength(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.length);
  } else {
    console.log(value.toFixed(2));
  }
}

printLength("Hello");
printLength(123.456);


Use cases of "instanceof" type guard:

class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());



Use cases of "in" type guard:

interface User {
  name: string;
  age: number;
}

interface Admin {
  name: string;
  role: string;
}

function printInfo(person: User | Admin) {
  if ('age' in person) {
    console.log(`User: ${person.name}, Age: ${person.age}`);
  } else {
    console.log(`Admin: ${person.name}, Role: ${person.role}`);
  }
}

const user: User = { name: 'John', age: 25 };
const admin: Admin = { name: 'Jane', role: 'Manager' };

printInfo(user); 
printInfo(admin);
