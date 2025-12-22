function chunkArrayInGroups(arr, num) {
  const resArr = [];
  for (let i = 0; i < arr.length; i+= num) {
    let chunk = arr.slice(i, i + num);
    resArr.push(chunk);
  }

  return resArr;
}

