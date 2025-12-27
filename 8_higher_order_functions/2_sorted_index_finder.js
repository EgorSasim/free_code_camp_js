function getIndexToIns(arr, num) {
  const idx = arr.sort((a, b) => a - b).findIndex(item => item >= num);
  return ~idx ? idx : arr.length;
}

