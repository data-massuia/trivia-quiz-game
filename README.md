# Trivia Quest

A React-powered trivia quiz game with 10 coding questions, score tracking, progress bar, and performance rating.

**[Play the game live](https://data-massuia.github.io/trivia-quiz-game/)**

![Screenshot](screenshot.png)

## How to Play

1. Read the question and click your answer
2. Green = correct, Red = wrong
3. Auto-advances to the next question
4. After 10 questions, see your final score and rating
5. Click "Play Again" to try again

## Tech Stack

- **React 19** — component-based UI framework
- **Vite** — fast build tool with hot module replacement
- **JavaScript (JSX)** — HTML-like syntax inside JavaScript

## Project Structure

```
src/
├── App.jsx               ← Main game component (state lives here)
├── App.css               ← All styles
├── data/
│   └── questions.js      ← Quiz question data
└── components/
    ├── QuestionCard.jsx   ← Question + answer buttons
    ├── ProgressBar.jsx    ← Visual quiz progress
    └── ResultScreen.jsx   ← Final score screen
```

## What I Learned

- **React fundamentals** — components, JSX, and the component tree
- **`useState` hook** — managing state that triggers re-renders
- **Props** — passing data from parent to child components
- **Conditional rendering** — showing different UI based on state (ternary operator in JSX)
- **`.map()` for lists** — rendering arrays of data as UI elements
- **JavaScript modules** — `import`/`export` to organize code across files
- **Vite** — project scaffolding, dev server with HMR, production builds
- **`base` config** — configuring Vite for subdirectory deployment (GitHub Pages)

## Run Locally

```bash
npm install
npm run dev
```

## Project 4 of 12

This is the fourth project in my [Vibe Coding Game Dev Course](https://github.com/data-massuia) — learning to code by building games with AI assistance.
