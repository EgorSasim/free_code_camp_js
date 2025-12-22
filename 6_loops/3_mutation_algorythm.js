function mutation(arr) {
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();

  for (const char of secondStr) {
    if (!firstStr.includes(char)) {
      return false;
    }
  }

  return true;
}
  
