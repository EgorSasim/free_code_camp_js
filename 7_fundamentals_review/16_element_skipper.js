function dropElements(arr, func) {
  let i;
  for (i = 0; i < arr.length; ++i) {
    if (func(arr[i]))
      break;
  }

  return i === arr.length - 1 ? [] : arr.slice(i);
}

