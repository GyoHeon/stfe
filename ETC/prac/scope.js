function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

const closure10 = outer(10);
const closure100 = outer(100);

console.log(closure10(3)); // 13
console.log(closure10(15)); // 25

console.log(closure100(3)); // 103
console.log(closure100(15)); // 115
