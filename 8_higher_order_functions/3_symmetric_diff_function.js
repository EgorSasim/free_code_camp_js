function diffArray(arr1, arr2) {
  const firstArrUniqueItems = arr1.filter(item => !arr2.includes(item));
  const secondArrUniqueItems = arr2.filter(item => !arr1.includes(item));

  return [
    ...firstArrUniqueItems,
    ...secondArrUniqueItems,
  ]
}

