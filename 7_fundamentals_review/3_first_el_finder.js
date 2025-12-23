function findElement(arr, func) {
  for (const item of arr) {
    if (func(item)) return item;
  }
  return undefined;
}

