//1
console.log("Hi there!");
//2
let botName = "teacherBot";
//3 
const greeting = `My name is ${botName}.`;
console.log(greeting);
//4

let subject = "JavaScript";
let topic = "strings";
//5
let sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);
//6
let strLengthIntro = `Here is an example of using the length property on the word ${subject}.`
console.log(strLengthIntro);
//7
console.log(subject.length);
//8
console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);
//9
console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
//10
console.log(subject[0]);
//11
console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);
//12
console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
console.log(subject[subject.length - 1]);
//13
let lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);
//14
let learningIsFunSentence = "Learning is fun.";
//15
console.log("Here are examples of finding the positions of substrings in the sentence.");
//16
console.log(learningIsFunSentence.indexOf("Learning"));
//17
console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));
//18
console.log("I hope you enjoyed learning today.");


