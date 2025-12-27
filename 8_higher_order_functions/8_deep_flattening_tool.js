function steamrollArray(arr) {
  const result = [];
  
  function flatten(element) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flatten(item);
      }
    } else {
      result.push(element);
    }
  }
  
  flatten(arr);
  return result;
}

