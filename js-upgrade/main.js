import _ from "lodash";

const userA = [
  { userId: "1", name: "lgh" },
  { userId: "2", name: "Neo" },
];
const userB = [
  { userId: "1", name: "lgh" },
  { userId: "3", name: "Prodo" },
];

const userC = userA.concat(userB);
console.log(userC, _.uniqBy(userC, "userId"));

const userD = _.unionBy(userA, userB, "userId");
console.log(userD);
