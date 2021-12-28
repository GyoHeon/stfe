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
