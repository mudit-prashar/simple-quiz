import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

type Question = {
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

type Props = {
  questions: Question[];
};

const Quiz: React.FC<Props> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="text-center">
      {!showResult ? (
        <div>
          <h2 className="text-lg font-bold mb-4">{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(index)}
                disabled={selectedOption !== null}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 mb-2 hover:bg-blue-600"
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption !== null && (
            <button onClick={handleNextQuestion} className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600">
              Next
            </button>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-5xl mb-4">Result</h2>
          <p className="mb-4 text-3xl">{`You scored ${score} out of ${questions.length}`}</p>
          <button onClick={restartQuiz} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
