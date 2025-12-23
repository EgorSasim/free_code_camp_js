function convertHTML(str) {
  const chars = str.split("");
  
  for (let i = 0; i < chars.length; i++) {
    switch(chars[i]) {
      case "&":
        chars[i] = "&amp;";
        break;
      case "<":
        chars[i] = "&lt;";
        break;
      case ">":
        chars[i] = "&gt;";
        break;
      case '"':
        chars[i] = "&quot;";
        break;
      case "'":
        chars[i] = "&apos;";
        break;
    }
  }
  
  return chars.join("");
}
