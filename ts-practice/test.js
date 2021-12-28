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
