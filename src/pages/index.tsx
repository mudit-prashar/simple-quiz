import Quiz from '../components/Quiz'
import React from 'react';

const questions = [
  {
    question: 'What is 2 + 2?',
    options: ['2', '3', '4', '5'],
    correctAnswerIndex: 2,
  },
  {
    question: 'What is 10 - 5?',
    options: ['3', '4', '5', '6'],
    correctAnswerIndex: 2,
  },
  {
    question: 'What is 3 * 2?',
    options: ['4', '5', '6', '7'],
    correctAnswerIndex: 2,
  },
  {
    question: 'What is 12 / 4?',
    options: ['2', '3', '4', '5'],
    correctAnswerIndex: 2,
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris', 'Madrid'],
    correctAnswerIndex: 2,
  },
];

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-gray-100">
        <div className="max-w-8xl w-full text-center">
            <h1 className="text-8xl mb-8 font-mono">Simple Quiz</h1>
        </div>
        <div className="max-w-5xl w-full mt-8 text-center">
            <Quiz questions={questions} />
        </div>
    </main>

  );
};

export default Home;
