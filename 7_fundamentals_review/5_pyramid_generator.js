function pyramid(patternChar, rowsCnt, vertexFacing) {
  let widestRowLen = 2 * rowsCnt - 1;

  let resStr = '\n';

  for (let i = 1, j = vertexFacing ? widestRowLen : 1;
        i <= rowsCnt; 
        ++i, j = vertexFacing ? j - 2 : j + 2
      ) {
       const spacesAmount = (widestRowLen - j) / 2;
       resStr += " ".repeat(spacesAmount);
       resStr += patternChar.repeat(j);
       resStr += '\n'
      }

  return resStr
 
}

