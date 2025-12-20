const isLeapYear = year => `${year} is${(!(year % 400) || !(year % 4) && !!(year % 100)) ? '' : ' not'} a leap year.`;

let year = 2024;

const result = isLeapYear(year);

console.log(result);

