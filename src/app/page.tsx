'use client';

import { useState } from 'react';
import TextEditor from '../components/TextEditor';
import TopNav from '../components/TopNav';
import PromptCards from '../components/PromptCards';

export default function Home() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (content: string) => {
    setLoading(true);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a friendly assistant.' },
          { role: 'user', content: content },
        ],
      }),
    });

    const data = await response.json();
    setResponse(data.choices[0].message.content);
    setLoading(false);
  };

  return (
    <>
      <TopNav />
      <div className="container flex flex-col justify-center align-center mx-auto max-w-2xl gap-4 mt-16 p-4">
        <div>
          <h1 className="text-4xl mb-2">Welcome back</h1>
          <p className="text-lg text-gray-500">Write a message to Unriddle AI below</p>
        </div>

        <PromptCards handleSubmit={handleSubmit} />
        <TextEditor onSubmit={handleSubmit} />

        {(loading || response) && (
          <div className="my-4 p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-3">Answer:</h2>
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-grey-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.934l3-2.643zm5 1.635V1"></path>
              </svg>
            ) : (
              <p>{response}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
