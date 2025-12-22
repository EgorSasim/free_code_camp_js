const questions = [
    {
        category: "JavaScript Basics",
        question: "q0?",
        choices: [
            "ch1",
            "ch2",
            "ch3"
        ],
        answer: "ch1"
    },
    {
        category: "JavaScript Basics",
        question: "q1?",
        choices: [
            "var",
            "let",
            "const"
        ],
        answer: "let"
    },
    {
        category: "Array Methods",
        question: "q2?",
        choices: [
            "push()",
            "pop()",
            "shift()"
        ],
        answer: "push()"
    },
    {
        category: "DOM Manipulation",
        question: "q3?",
        choices: [
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()"
        ],
        answer: "getElementById()"
    },
    {
        category: "Functions",
        question: "q4?",
        choices: [
            "Callback",
            "Recursion",
            "Anonimous"
        ],
        answer: "Recursion"
    },
    {
        category: "Async JavaScript",
        question: "q5?",
        choices: [
            "Promise",
            "Callback",
            "Observable"
        ],
        answer: "Promise"
    }
];

function getRandomQuestion(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomComputerChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getResults(question, choice) {
  return question.answer === choice ? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${question.answer}`
}


