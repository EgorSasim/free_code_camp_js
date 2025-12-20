const confirmEnding = (srcStr, checkStr) => !!~srcStr.indexOf(checkStr, srcStr.length - checkStr.length);
// or
const confirmEnding2 = (srcStr, checkStr) => srcStr.slice(srcStr.length - checkStr.length) === checkStr;

