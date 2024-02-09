// components/EndScreen.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface EndScreenProps {
  score: number;
  totalQuestions: number;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalQuestions }) => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const generateMessage = async () => {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo', // Use your desired GPT model here
            messages: [{"role": "assistant", "content": `The user scored ${score} out of ${totalQuestions} in the quiz.`},],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
            },
          }
        );
        console.log('Response:', response.data); // Log the entire response object

        if (response.data.choices && response.data.choices.length > 0) {
          setMessage(response.data.choices[0].message.content.trim());
        } else {
          setMessage('No message available');
        }
      } catch (error) {
        console.error('Error generating message:', error);
        setMessage('An error occurred while generating the message');
      }
    };

    generateMessage();
  }, [score, totalQuestions]);

  return (
    <div className="py-4">
      <p className="mb-4 text-3xl">Your Score: {score} out of {totalQuestions}</p>
      <p className="mb-4 text-xl">{message}</p>
    </div>
  );
};

export default EndScreen;

