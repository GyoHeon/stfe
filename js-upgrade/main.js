import _ from "lodash";
import myData from "./myData.json";

const userA = { userId: "1", name: "lgh" };

const str = JSON.stringify(userA);
console.log(str);

const obj = JSON.parse(str);
console.log(obj);

console.log(myData);
