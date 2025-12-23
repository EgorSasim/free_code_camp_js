const largestOfAll = arr => arr.reduce((acc, curr) => {
  acc.push(Math.max(...curr));
  return acc;
}, []);

