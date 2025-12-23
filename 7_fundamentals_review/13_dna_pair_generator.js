const pairs = {
  "A": "T",
  "T": "A",
  "C": "G",
  "G": "C",
}

const pairElement = (str) => str.split('').reduce((acc, curr) => {
    acc.push([curr, pairs[curr]])
    return acc;
  } , []);

