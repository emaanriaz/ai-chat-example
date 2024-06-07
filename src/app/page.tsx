'use client';

import { useState } from 'react'
import TextEditor from '../components/TextEditor'
import TopNav from '../components/TopNav';
import PromptCards from '../components/PromptCards';

export default function Home() {
  const [response, setResponse] = useState('')

  const handleSubmit = async (content: string) => {
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
          { role: 'user', content: content }
        ],
      }),
    });
  
    const data = await response.json()
    setResponse(data.choices[0].message.content)
  }

  return (
    <>
      <TopNav/>
      <div className="container flex flex-col justify-center align-center mx-auto max-w-2xl gap-4 mt-16 p-4">
        <div>
          <h1 className="text-4xl mb-2">Welcome back</h1>
          <p className="text-lg text-gray-500">Write a message to Unriddle AI below </p>
        </div>
        
        <PromptCards handleSubmit={handleSubmit} />
        <TextEditor onSubmit={handleSubmit} />
        {response && (
          <div className="my-4 p-4 border rounded-md">
            <h2 className="text-xl font-semibold mb-3">Answer:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
    </>
    
  )
}
