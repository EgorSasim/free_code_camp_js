const findLongestWordLength = (sentence) => sentence.split(/\s+/).reduce((acc, curr) => {
  if (acc.length < curr.length) {
    return curr;
  }
  return acc;
} , '').length;

