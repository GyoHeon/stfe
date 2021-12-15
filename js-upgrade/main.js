// function User() {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const lgh = new User("Gyoheon", "Lee");
console.log(lgh);
