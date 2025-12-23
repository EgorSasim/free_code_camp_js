function sumAll(arr) {
  const first = Math.min(...arr);
  const last = Math.max(...arr);
  let res = 0;

  for (let i = first; i <= last; ++i) {
    res += i;
  }

  return res;
}

