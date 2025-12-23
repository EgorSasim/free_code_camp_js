function uniteUnique(...arrs) {
  const resArr = [];

  for (const arr of arrs) {
    for (const item of arr) {
      if (!resArr.includes(item)) {
        resArr.push(item);
      }
    }
  }

  return resArr;
} 

