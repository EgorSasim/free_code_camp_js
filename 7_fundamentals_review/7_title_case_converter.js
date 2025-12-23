const titleCase = string => string.split(/\s+/).map(subStr => subStr[0].toUpperCase() + subStr.slice(1).toLowerCase()).join(' ');

