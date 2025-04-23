// app/page.tsx
'use client';

import { useState } from 'react';
import { useSocket } from './hooks/useSocket';

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { sendMessage, isConnected } = useSocket((msg) =>
    setMessages((prev) => [...prev, msg])
  );

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    } else {
      setError('Please enter a valid message');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">🧠 Real-time Chat</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 bg-blue-500 text-white px-4 py-2"
      >
        Send1
      </button>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-4">
        {messages.map((msg, i) => (
          <div key={i} className="border-b py-1">
            {msg}
          </div>
        ))}
      </div>

      {!isConnected && (
        <div className="text-red-500 mt-2">Disconnected from WebSocket</div>
      )}
    </div>
  );
}
