// boolean
let isDone: boolean = false;
console.log(isDone);

// number
let decimal: number = 55555;
let hex: number = 0xf00d;
let binary: number = 0b1001;
let octal: number = 0o744;
let NotANumber: number = NaN;
let underscoreNum: number = 1_000_000;
console.log(decimal, hex, binary, octal, NotANumber, underscoreNum);

// string
let myName: string = "LGH";
let myBudget: string = `${underscoreNum}원 남음!`;
console.log(myName, myBudget);

// null, undefined
let u: undefined = undefined;
let n: null = null;
// let myNum: number = null; impossible

// union type
let union: number | null = 37;
console.log(union);
union = null;
console.log(union);

// object
const person1: object = { name: "LGH", age: 26.9 };
const person2: object = Object.create({ name: "LGH", age: 26.9 });
console.log(typeof person1);
console.log(typeof person2);

// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
let tuple: [number, string] = [26.9, "LGH"];
console.log(tuple);
tuple = [27, "next year"];
console.log(tuple);

const person: [string, number] = ["Prodo", 20];
const [first, second] = person;
