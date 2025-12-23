function generatePassword(len) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let res = '';

  for (let i = 0; i < len; ++i) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }

  return res;
}

const password = generatePassword(10);

console.log(`Generated password: ${password}`);

