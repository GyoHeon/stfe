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
let tuple = [26.9, "LGH"];
console.log(tuple);
tuple = [27, "next year"];
console.log(tuple);
const person = ["Prodo", 20];
const [first, second] = person;
// any
// any를 남발하면 탕비스크립트를 쓰는 이유가 없으므로 최대한 지양해야함.
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
if (maybe === true) {
    const aBoolean = maybe;
}
// never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
