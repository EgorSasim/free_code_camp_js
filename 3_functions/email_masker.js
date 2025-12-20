const maskEmail = email => {
  const hiddenPart = email.slice(1, email.indexOf('@') - 1);
  return email.replace(hiddenPart, '*'.repeat(hiddenPart.length));
}

const email = 'egorsasim@mail.ru';

console.log(maskEmail(email));

