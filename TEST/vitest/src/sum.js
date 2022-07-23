const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

export default sum;
