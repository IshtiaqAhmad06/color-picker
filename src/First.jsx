import { useState } from "react";
import "./External.css";

function First() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    if (!input) return;
  
    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
  
    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: input }]
              }
            ]
          }),
        }
      );
  
      const data = await res.json();
  
      console.log(data);
  
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  
      setMessages((prev) => [
        ...prev,
        { text: reply, sender: "bot" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "Error aa gaya 😢", sender: "bot" },
      ]);
    }
  
    setInput("");
  };
    return (
    <div className="chat-container">
      <h2>IA865 Chatbot</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-msg" : "bot-msg"}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default First;