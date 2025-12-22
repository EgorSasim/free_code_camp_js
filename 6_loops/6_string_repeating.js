function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }

  let resStr = '';
  for (let i = 0; i < num; ++i) {
    resStr += str;
  }

  return resStr;
}

