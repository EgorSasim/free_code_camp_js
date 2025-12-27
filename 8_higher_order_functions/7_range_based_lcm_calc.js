function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  
  let lcm = min;
  for (let i = min + 1; i <= max; i++) {
    lcm = (lcm * i) / gcd(lcm, i);
  }
  return lcm;
}

