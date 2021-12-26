import _ from "lodash";
import { getType } from "./getType.js";

const user = { name: "lgh", age: 22, email: "ghl12078@gmail.com" };
const copyUser = _.cloneDeep(user);

console.log(user);
console.log(getType([1, 2, 3]));
console.log(getType({ a: 1, b: 2 }));
console.log(getType("b"));
