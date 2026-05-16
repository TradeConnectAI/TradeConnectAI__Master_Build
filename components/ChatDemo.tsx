"use client";

import { useState } from "react";

export default function ChatDemo() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);

    const userMessage = input;
    setMessages((prev) => [...prev, `You: ${userMessage}`]);
    setInput("");

    const res = await fetch("/api/demo-chat", {
      method: "POST",
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();

    setMessages((prev) => [...prev, `AI: ${data.reply}`]);
    setLoading(false);
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">AI Chat Demo</h1>

      <div className="border rounded p-4 h-80 overflow-y-auto bg-white">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            {msg}
          </div>
        ))}

        {loading && <div className="text-gray-500">AI is thinking...</div>}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="border p-2 rounded flex-1"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
