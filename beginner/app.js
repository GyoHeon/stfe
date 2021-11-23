const a = Array(100).fill();
a.forEach(function (_, i) {
  i++;
  if (!(i % 15)) console.log("fizzbuzz");
  else if (!(i % 3)) console.log("fizz");
  else if (!(i % 5)) console.log("buzz");
  else console.log(i);
});
