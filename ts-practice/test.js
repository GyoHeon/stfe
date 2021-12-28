"use strict";
// boolean
let isDone = false;
console.log(isDone);
// number
let decimal = 55555;
let hex = 0xf00d;
let binary = 0b1001;
let octal = 0o744;
let NotANumber = NaN;
let underscoreNum = 1000000;
console.log(decimal, hex, binary, octal, NotANumber, underscoreNum);
// string
let myName = "LGH";
let myBudget = `${underscoreNum}원 남음!`;
console.log(myName, myBudget);
// null, undefined
let u = undefined;
let n = null;
// let myNum: number = null; impossible
// union type
let union = 37;
console.log(union);
union = null;
console.log(union);
// object
const person1 = { name: "LGH", age: 26.9 };
const person2 = Object.create({ name: "LGH", age: 26.9 });
console.log(typeof person1);
console.log(typeof person2);
// array
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
// tuple
let tuple1 = [26.9, "LGH"];
console.log(tuple1);
tuple1 = [27, "next year"];
console.log(tuple1);
