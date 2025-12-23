function frankenSplice(arr1, arr2, idx) {
  const resArr = [];

  let i = 0;
  for (; i < idx; ++i) {
    resArr.push(arr2[i]);
  }

  resArr.push(...arr1);

  for(; i < arr2.length; ++i) {
    resArr.push(arr2[i]);
  }

  return resArr;
}

