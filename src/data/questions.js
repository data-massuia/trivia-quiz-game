// Each question has: the question text, 4 options, and the correct answer
// The correct answer must exactly match one of the options

const questions = [
  {
    question: "What programming language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
  {
    question: "Inside which HTML element do we put JavaScript code?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>",
  },
  {
    question: "What does 'DOM' stand for?",
    options: [
      "Document Object Model",
      "Data Object Manager",
      "Digital Ordinance Map",
      "Desktop Object Method",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which company created React?",
    options: ["Google", "Apple", "Meta (Facebook)", "Microsoft"],
    answer: "Meta (Facebook)",
  },
  {
    question: "What does CSS Grid help you create?",
    options: [
      "Animations",
      "2D layouts with rows and columns",
      "Database connections",
      "Server routes",
    ],
    answer: "2D layouts with rows and columns",
  },
  {
    question: "What is the correct syntax for a JavaScript arrow function?",
    options: [
      "function => ()",
      "() => {}",
      "=> function()",
      "func() => {}",
    ],
    answer: "() => {}",
  },
  {
    question: "What does 'npm' stand for?",
    options: [
      "Node Package Manager",
      "New Programming Method",
      "Network Protocol Module",
      "Node Process Monitor",
    ],
    answer: "Node Package Manager",
  },
  {
    question: "In React, what hook is used to manage state?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    question: "What does 'git push' do?",
    options: [
      "Deletes a branch",
      "Downloads code from GitHub",
      "Uploads local commits to the remote repository",
      "Creates a new commit",
    ],
    answer: "Uploads local commits to the remote repository",
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A backup copy of your HTML files",
      "A lightweight copy of the real DOM for efficient updates",
      "A browser plugin for debugging",
      "A CSS rendering engine",
    ],
    answer: "A lightweight copy of the real DOM for efficient updates",
  },
];

export default questions;
