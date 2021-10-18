//Primitives

let age: number;

age = 12.1;

let userName: string | string[];

userName = 'KKURT';

let isInstructor = false;

//more complex types
let hobbies: string[];

hobbies = ['Sports', 'Cyclings'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
  name: 'Kerem',
  age: 22
};

/*
person = {
    isEmployee: true,
}
 */

let people: Person[];

// TYpe inference

let course: string | number = 'React the complete guide';

course = 12341;

//functions & types

function  add(a: number, b:number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
insertAtBeginning(['a', 'b', 'c'], 'd')

//updatedArray[0].split('');

